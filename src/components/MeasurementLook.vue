<template>
  <div class="sizes__row">
        <div class="sizes__column">
            <div class="sizes__items">
                <p class="sizes__item">{{title}}</p>
            </div>
        </div>
        <div class="sizes__column">
            <div class="sizes__items">
                <p class="sizes__item">{{size}}</p>
            </div>
        </div>
        <div class="sizes__column">
            <div class="sizes__items">
                <p class="sizes__item">{{sizeVary}}</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'MeasurementLook',
    props:{
    title: String,
    size: Number,
    sizeVary: [String,Number]
}

}
</script>

<style>

</style>