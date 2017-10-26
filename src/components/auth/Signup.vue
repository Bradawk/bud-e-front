<template>
    <div class="landing-page">
        <div class="container login">
            <div class="box">
                <div class="content">
                    <h1> Sign Up </h1>
                    <form @submit.prevent="submit()">
                        <div class="row">
                            <div class="col s6 input-field">
                                <input id="username" type="text" name="username" v-model="credentials.username" required/>
                                <label for="username">Username</label>
                            </div>
                            <div class="col s6 input-field">
                                <input id="email" type="email" name="email" v-model="credentials.email" required/>
                                <label for="email">E-mail</label>
                            </div>
                            <div class="col s6 input-field">
                                <input id="password" type="password" name="password" v-model="credentials.password" required />
                                <label for="password">Password</label>
                            </div>
                            <div class="col s12">
                                <input type="submit" value="Sign up" class="btn waves-effect waves-light" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="footer">
                    <div v-if="loading == true" class="progress">
                        <div class="indeterminate"></div>
                    </div>
                    <div class="footer-bar"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import auth from '../../auth/index'

export default {

    data() {
        return {
            credentials: {
                username: '',
                email: '',
                password: ''
            },
            error: '',
            loading: ''
        }
    },
    methods: {
        submit() {
            this.loading = true;
            var credentials = {
                username: this.credentials.username,
                email: this.credentials.email,
                password: this.credentials.password
            }
            auth.signup(this, credentials, '/login')
            this.loading = false;
        }
    }
}
</script>