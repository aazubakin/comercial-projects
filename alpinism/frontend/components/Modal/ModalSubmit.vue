<template>
  <div id="modal-shadow" @click.self="$emit('closeSubmit')">
    <div id="modal-window">
      <div class="modal-close" @click="$emit('closeSubmit')">&#10006;</div>
      <div class="submit">
        <h3>Форма отправлена</h3>
        <button class="primary-btn" @click="$emit('closeSubmit')">Ок</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.submit {
  text-align: center;
  padding: 20px;
}
.primary-btn {
  margin-top: 10px;
}
</style>
