<script>
import Content from '@viewLayouts/Content/content.vue'
import ItemsLayout from '@viewLayouts/Items/items.vue'
import Loader from '@components/Loading/_loading.vue'
import { PAGE_STATE } from '@utils/enums'
import { apiComputed } from '@state/helper/api'

export default {
    page: {
        title: 'Sessions',
        meta: [
            {
                name: 'description',
                content: 'Setup your audio enabled form.',
            },
        ],
    },
    data () {
      return {
        e6: 1,
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
                        :complete="e6 > 1"
                        step="1"
                        >
                        Select an app
                        <small>Summarize if needed</small>
                        </v-stepper-step>

                        <v-stepper-content step="1">
                        <v-card
                            color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                        ></v-card>
                        <v-btn
                            color="primary"
                            @click="e6 = 2"
                        >
                            Continue
                        </v-btn>
                        <v-btn text>
                            Cancel
                        </v-btn>
                        </v-stepper-content>

                        <v-stepper-step
                        :complete="e6 > 2"
                        step="2"
                        >
                        Configure analytics for this app
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
                        :complete="e6 > 3"
                        step="3"
                        >
                        Select an ad format and name ad unit
                        </v-stepper-step>

                        <v-stepper-content step="3">
                        <v-card
                            color="grey lighten-1"
                            class="mb-12"
                            height="200px"
                        ></v-card>
                        <v-btn
                            color="primary"
                            @click="e6 = 4"
                        >
                            Continue
                        </v-btn>
                        <v-btn text>
                            Cancel
                        </v-btn>
                        </v-stepper-content>

                        <v-stepper-step step="4">
                        View setup instructions
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

<style lang="stylus">
</style>