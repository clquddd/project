<template>
    <div class="container1">
        <nav>
            <router-link to="/" class="rout">Домашняя страница</router-link>
            <router-link to="/chat" class="rout">Чат</router-link>
            <router-link to="/test" class="rout">Подгрузка API данных</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavComp',
    }
</script>

<style scoped>

    .rout {
        text-decoration: none;
        color: black;
            border: 2px solid black;
      border-radius: 6px;

    }

    .rout:hover {
  background-color: gold;
}

    .container1 {
        background-color: #ffe76e;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    border: 2px solid black;
      border-radius: 6px;
    }

    nav {
        width: 500px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
    }

</style>