<script>
export default {
  name: 'Modal',
  data() {
    return {
      isModalVisible: true,
      unlockPage: '',
    };
  },
  methods: {
    submit() {
      if (this.unlockPage === 'remind') {
        this.isModalVisible = false;
      }
    },
    change(event) {
      this.unlockPage = event.target.value;
    },
  },
};
</script>

<template>
  <Transition name='fade'>
    <div class='modal-backdrop' v-show='isModalVisible'>
      <div class='modal'>
        <header class='modal-header'>
          Provide credential
        </header>
        <section class='modal-body'>
          <input class='input-green' type='password' @input='change' />
        </section>
        <footer class='modal-footer'>
          <button type='button' class='btn-green' @click='submit'>
            Unlock
          </button>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.input-green:focus {
  outline: 1px solid #4AAE9B;
  color: #2c3e50;
}

.input-green {
  border: 1px solid #4AAE9B;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: center;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 15px;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>