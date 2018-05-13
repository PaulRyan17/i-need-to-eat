<template>
    <div class = "ButtonSection">
       <nuxt-link to="/restaurants">
            <button class = "btn bt__action">I NEED TO EAT!</button>
       </nuxt-link> 
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ButtonSection {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border: none;
}

.bt__action {
  color: #fff;
  width: 250px;
  height: 70px;
  background-color: #ff4500;
  font-size: 20px;
  font-family: 'Playfair Display', serif;
}
</style>