<template>
    <base-dialog :title="title" ref="baseDialog">
            <base-input type="text" label="Name"    placeholder="Name" name="name" v-model="customer.name"/>
            <base-input type="text" label="Phone"   placeholder="+249--------" name="phone" v-model="customer.phone"/>
            <base-input type="text" label="Address" placeholder="address" name="address" v-model="customer.address"/>
            <div class="btn">
              <base-button type="submit" value="Save" @click="submit" />
              <base-button type="submit" value="Cancel" @click="close"/>
            </div>
    </base-dialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';
import {mapActions} from 'vuex';

export default {
    name:"customer-dialog",
    components:{
        BaseDialog,
        BaseInput,
        BaseButton,
    },
    data() {
        return {
            customer:{},
            title: '',
            mode: 'NEW'
        }
    },
    methods:{
        ...mapActions('customer',['storeCustomer']),
        open(params) {

            this.title = params.title;
            this.mode = params.mode;
            this.customer = this.mode == "NEW" ? {}: params.item;
    
            this.$refs.baseDialog.open();
        },
        close() {
            this.$refs.baseDialog.close();
        },
        submit() {
            this.storeCustomer(this.customer)
                .then(response => console.info(response))
                .catch(error => {
                    this.$emit('submit',error.response.data);
                });
        }
    }
}
</script>