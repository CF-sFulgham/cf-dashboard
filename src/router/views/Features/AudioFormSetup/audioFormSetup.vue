<script>
import Content from '@viewLayouts/Content/content.vue'
import ItemsLayout from '@viewLayouts/Items/items.vue'
import Loader from '@components/Loading/_loading.vue'
import { PAGE_STATE } from '@utils/enums'
import { apiComputed } from '@state/helper/api'

export default {
    page: {
        title: 'Audio Setup',
        meta: [
            {
                name: 'description',
                content: 'Setup your audio enabled form.',
            },
        ],
    },
    data () {
      return {
      }
    },
    components: {
        Content,
        Loader,
        ItemsLayout,
    },
    computed: {
        ...apiComputed,
        Loaded() {
            return this.pageState === PAGE_STATE.LOADED
        },
        Loading() {
            return (
                this.pageState === PAGE_STATE.LOADING ||
                this.pageState === PAGE_STATE.INIT
            )
        },
        Error() {
            return this.pageState === PAGE_STATE.ERROR
        },
        routePath() {
            return this.$route.name
        },
    },
    watch: {
        apiState(value) {
            if (value === 'LOADED') this.getSessions()
        },
    },
}
</script>
<template>
    <ItemsLayout>
        <Loader v-if="Loading" />
        <Content>
            <div class="v-application v-application--is-ltr theme--light row">
                <div class=" v-application--wrap col-md-12">
                    <v-stepper
                        v-model="e6"
                        vertical
                    >
                        <v-stepper-step
                        editable
                        step="1"
                        >
                        Please specify the name and ID of your form. 
                        <small>The name will show up as a label in the Admin Portal. The ID is the unique ID attribute on the form in the HTML. Also, View setup video.</small>
                        </v-stepper-step>

                        <v-stepper-content step="1">
                        <v-card
                            color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                        ></v-card>
                        <v-btn
                            color="primary"
                        >
                            Continue
                        </v-btn>
                        <v-btn text>
                            Cancel
                        </v-btn>
                        </v-stepper-content>

                        <v-stepper-step
                        step="2"
                        editable
                        >
                        Configure your form by adding elements.
                        </v-stepper-step>

                        <v-stepper-content step="2">
                        <v-card
                            color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                        ></v-card>
                        <v-btn
                            color="primary"
                            @click="e6 = 3"
                        >
                            Continue
                        </v-btn>
                        <v-btn text>
                            Cancel
                        </v-btn>
                        </v-stepper-content>

                        <v-stepper-step
                        editable
                        step="3"
                        >
                        Configure the audio tools for the form elements you just added.
                        <small>The configuration will include setting up an accuracy threshold, dropdown menu selects, etc.</small>
                        </v-stepper-step>

                        <v-stepper-content step="3">
                        <v-card
                            color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                        ></v-card>
                        <v-btn
                            color="primary"
                        >
                            Continue
                        </v-btn>
                        <v-btn text>
                            Cancel
                        </v-btn>
                        </v-stepper-content>

                        <v-stepper-step 
                            editable 
                            step="4">
                        Demo Form
                        </v-stepper-step>
                        <v-stepper-content step="4">
                        <v-card
                            color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                        ></v-card>
                        <v-btn
                            color="primary"
                            @click="e6 = 1"
                        >
                            Continue
                        </v-btn>
                        <v-btn text>
                            Cancel
                        </v-btn>
                        </v-stepper-content>
                    </v-stepper>
                </div>
            </div>
        </Content>
    </ItemsLayout>  
</template>

<style lang="scss">
</style>