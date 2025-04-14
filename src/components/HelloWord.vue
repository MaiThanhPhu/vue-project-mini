<template>
    <div class="login-container">
      <h2>Đăng nhập</h2>
      <form @submit.prevent="login">
        <input type="text" placeholder="Tên đăng nhập" v-model="username" />
        <input type="password" placeholder="Mật khẩu" v-model="password" />
        <button type="submit">Đăng nhập</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        username: "",
        password: "",
        error: null,
      };
    },
    methods: {
      login() {
        axios
          .post("/api/login", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            // Xử lý đăng nhập thành công
            console.log(response.data);
            // Chuyển hướng đến trang chủ hoặc trang khác
            this.$router.push("/");
          })
          .catch((error) => {
            // Xử lý lỗi đăng nhập
            this.error = error.response.data.message;
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    width: 300px;
    margin: 100px auto;
    text-align: center;
  }
  
  .login-container input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .login-container button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
  }
  
  .error {
    color: red;
  }
  </style>