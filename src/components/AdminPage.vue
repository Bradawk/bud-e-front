<template>
    <div>
        <h1> This is the admin page </h1>
        <p v-if="error">{{error}}</p>
        <div v-for="user in users" v-bind:key="user">
            <ul v-for="u in user" v-bind:key="u">
                <li>{{u.username}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import auth from '../auth/index'

export default {
    name: 'index',
    data() {
        return {
            users: [],
            error: '',
            user: auth.user
        }
    },
    beforeMount() {
        if (!this.user.authenticated) {
            this.$router.push('/login');
            Materialize.toast('You have to sign in first...', '2000');
        }
        this.$http.get('http://localhost:3000/user', { headers: { 'Authorization': localStorage.getItem('token') } })
            .then(response => {
                console.log('lol')
                this.users.push(response.data)

            })
            .catch((error) => {
                this.error = error;
            })
    },
    route: {
        canActivate() {
            return auth.user.authenticated;
        }
    }

}
</script>