<template>
    <div class="container">
        <div class="title">Команды</div>
        <div v-if="isLoad" class="loading"></div>
        <div v-else class="data"></div>
        <div v-for="(el, i) in teamData" :key="el.city">
            {{ i + 1 }}. {{ el.abbreviation }} {{ el.city }}
            <img src="https://avatars.mds.yandex.net/i?id=e51c0bb71789882fb6fc9e3608f8c47904342b10-7593510-images-thumbs&n=13&exp=1" alt="delete" style="width: 15px; heigh: 15px;" @click="removeTeam(el.id)">
        </div>
    </div>
</template>


<script>
    export default {
        name: 'TestApi',

        data() {
            return {
                teamData: [],
                isLoad: true
            }
        },
        
        methods: {
            removeTeam(id) {
                this.teamData = this.teamData.filter((el) => el.id !== id);
            }
        },

        mounted() {
            const url = "https://free-nba.p.rapidapi.com/teams?page=0";
 	    const options = {
	    method: "GET",
	    headers: {
 	    "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
 	    "X-RapidAPI-Host": " free-nba.p.rapidapi.com ",
        },
        };    
        

            fetch(url, options)
                .then((res) => res.json())
                .then((res) => {
                    this.teamData = res.data;
                    if (this.teamData !== '')
                    this.isLoad = false;
                })
         }
    }
    
</script>


<style>

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      border: 2px solid black;
      border-radius: 6px;
}

.title {
    font-size: 2em;
    color: #ffe500;
    margin: 10px;
    font-weight: bold;
}

.data {
    padding: 20px;
}

.loading {
    padding-bottom: 20px;
}

img {
    cursor: pointer;
    margin-left: 10px;
}

</style>
