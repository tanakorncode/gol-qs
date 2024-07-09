<script setup lang="ts">
// TypeScript enabled
import { ref } from "vue";

const count = ref(1);
const individualSelected = ref();
const status = ref(false);
const selectedText = ref("");
</script>

<template>
  <!-- type checking and auto-completion enabled -->
  {{ count.toFixed(2) }}

  <p>
    <input type="radio" id="test1" name="radio-group" checked />
    <label for="test1">Apple</label>
  </p>
  <p>
    <input type="radio" id="test2" name="radio-group" />
    <label for="test2">Peach</label>
  </p>
  <p>
    <input type="radio" id="test3" name="radio-group" />
    <label for="test3">Orange</label>
  </p>

  <div class="checkboxes__row">
    <div class="checkboxes__item">
      <label class="checkbox style-c">
        <input type="checkbox" />
        <div class="checkbox__checkmark"></div>
        <div class="checkbox__body">ตัวเลือกที่ 1</div>
      </label>
    </div>
    <div class="checkboxes__item">
      <label class="checkbox style-c">
        <input type="checkbox" checked />
        <div class="checkbox__checkmark"></div>
        <div class="checkbox__body">ตัวเลือกที่ 2</div>
      </label>
    </div>
  </div>
  <BFormRadio v-model="individualSelected" name="some-radios" value="A"
    >Option A
  </BFormRadio>
  <!-- <BFormRadio v-model="individualSelected" name="some-radios" value="B"
    >Option B
  </BFormRadio> -->

  <BFormCheckbox
    id="checkbox-1"
    v-model="status"
    name="checkbox-1"
    value="accepted"
    unchecked-value="not_accepted"
  >
    I accept the terms and use
  </BFormCheckbox>

  <BFormInput v-model="selectedText" placeholder="Enter your name" />

  <div class="d-flex gap-2">
    <BButton>Button</BButton>
    <BButton variant="danger">Button</BButton>
    <BButton variant="success">Button</BButton>
    <BButton variant="outline-primary">Button</BButton>
  </div>
</template>

<style lang="scss" scoped>
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  width: 12px;
  height: 12px;
  background: #0a6fbc;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

/* STYLE C */
.checkboxes__item {
  padding-bottom: 10px;
}
.checkbox.style-c {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checkbox.style-c input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
// .checkbox.style-c input:checked ~ .checkbox__checkmark {
//   background-color: #0a6fbc;
// }
.checkbox.style-c input:checked ~ .checkbox__checkmark:after {
  opacity: 1;
}
// .checkbox.style-c:hover input ~ .checkbox__checkmark {
//   background-color: #eee;
// }
// .checkbox.style-c:hover input:checked ~ .checkbox__checkmark {
//   background-color: #0a6fbc;
// }
.checkbox.style-c .checkbox__checkmark {
  position: absolute;
  top: 0px;
  left: 0;
  height: 20px;
  width: 20px;
  // background-color: #eee;
  transition: background-color 0.25s ease;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.checkbox.style-c .checkbox__checkmark:after {
  content: "";
  position: absolute;
  left: 7px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #0a6fbc;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.25s ease;
}
.checkbox.style-c .checkbox__body {
  color: #333;
  line-height: 1.4;
  font-size: 16px;
}
</style>
