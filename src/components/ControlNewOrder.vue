<template>
  <div class="control__row">
                        <div class="control__column">
                          <div class="control__fullname">{{order.lastName}} {{order.firstName}}</div>
                        </div>
                        <div class="control__column">
                          <div class="control__date">{{order.date}} </div>
                        </div>
                        <div class="control__column"> 
                          <div class="control__description">{{order.comment}}</div>
                        </div>
                        <div class="control__column">
                          <div class="control__phone">{{order.number}}</div>
                        </div>
                        <div class="control__column">
      <router-link :to="`/orderlook/${order.orderId}`" class="control__look">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.125 7C13.125 7.8288 12.7958 8.62366 12.2097 9.20971C11.6237 9.79576 10.8288 10.125 10 10.125C9.1712 10.125 8.37634 9.79576 7.79029 9.20971C7.20424 8.62366 6.875 7.8288 6.875 7C6.875 6.1712 7.20424 5.37634 7.79029 4.79029C8.37634 4.20424 9.1712 3.875 10 3.875C10.8288 3.875 11.6237 4.20424 12.2097 4.79029C12.7958 5.37634 13.125 6.1712 13.125 7V7Z"/>
                <path d="M0 7C0 7 3.75 0.125 10 0.125C16.25 0.125 20 7 20 7C20 7 16.25 13.875 10 13.875C3.75 13.875 0 7 0 7ZM10 11.375C11.1603 11.375 12.2731 10.9141 13.0936 10.0936C13.9141 9.27312 14.375 8.16032 14.375 7C14.375 5.83968 13.9141 4.72688 13.0936 3.90641C12.2731 3.08594 11.1603 2.625 10 2.625C8.83968 2.625 7.72688 3.08594 6.90641 3.90641C6.08594 4.72688 5.625 5.83968 5.625 7C5.625 8.16032 6.08594 9.27312 6.90641 10.0936C7.72688 10.9141 8.83968 11.375 10 11.375V11.375Z"/>
            </svg>
        </router-link>
    </div>
                        <div class="control__column">
                          <button class="control__delete" @click="deleteOrder(order.orderId)">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 4V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5ZM7 2V4H13V2H7Z"/>
                            </svg>
                          </button>
                        </div>
                        <div class="control__column">
                          <div class="control__select">
                            <div class="control__status">
                              <svg width="20" height="22" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.30929 18.33H0V0H15.7114L11.9145 5.89179L15.7114 11.7836H1.30929V18.33Z"/>
                              </svg>
                            </div>
                            <div class="control__options">
                              <button>?? ????????????????</button>
                              <button>?? ????????????</button>
                              <button>??????????????????????</button>
                            </div>
                          </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "ControlNewOrder",
    props:{
      order:Object,
    },
    methods:{
      deleteOrder(id){
        axios.post('http://localhost:8080/api/order/deleteOrder', {id})
        .then(()=>this.$store.dispatch('orderModule/setAllOrders'))
      }
    }
}
</script>

<style>

</style>