<template>
  <div class="container" style="margin-top: 1rem;">
    <!-- <el-radio-group v-model="radio">
      <el-radio v-model="radio1" label="1" border>Tranferencia</el-radio>
      <el-radio v-model="radio1" label="2" border>Retiro</el-radio>
      <el-radio v-model="radio1" label="3" border>Consignación</el-radio>
    </el-radio-group> -->
    <div class="grid d-flex justify-content-evenly">
      <div class="card" v-for="(item, index) in typeMove" :key="index">
        <label>
          <input
            :name="item.name"
            :value="item.id"
            class="radio"
            type="radio"
            checked
            :ref="`radio_${item.id}`"
            v-model="radio"
            @change="onChange"
          >
          <span class="plan-details">
            <span class="plan-type">{{ item.name }}</span>
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TypeMovement',
    props: {
      typeMove: {
        default() {
          return []
        },
        type: Array,
      }
    },
    data() {
      return {
        radio: '',
      }
    },
    methods: {
      onChange(evt) {
        const { value, name } = evt.target
        this.$store.dispatch('typeMovement/GET_VALUE', Number(value))
        this.$store.dispatch('typeMovement/GET_NAME', name)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .grid
    // display: grid;
    // grid-gap: 1em;
    // margin: 0 auto;
    // max-width: 60em;
    // padding: 0;
  .card
    background-color: #fff;
    border-radius: 0.5em;
    position: relative;
    width: 300px;

    &:hover
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  .radio
    font-size: inherit;
    margin: 0;
    position: absolute;
    right: calc(1em + 2px);
    top: calc(1em + 2px);
  @supports(-webkit-appearance: none) or (-moz-appearance: none) {
    .radio {
      -webkit-appearance: none;
      -moz-appearance: none;
      background: #fff;
      border: 2px solid #e2ebf6;
      border-radius: 50%;
      cursor: pointer;
      height: 1.5em;
      outline: none;
      transition: background 0.2s ease-out,
      border-color 0.2s ease-out;
      width: 1.5em;

      &::after {
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        content: '';
        display: block;
        height: 0.75rem;
        left: 25%;
        position: absolute;
        top: 50%;
        transform: rotate(45deg) translate(-50%, -50%);
        width: 0.375rem;
      }

      &:checked {
        background: #e2ebf6;
        border-color: #e2ebf6;
      }
    }

    .card:hover .radio {
      border-color: #c4d1e1;
      &:checked {
        border-color: #e2ebf6;
      }
    }
  }

  .plan-details
    border: 2px solid #e2ebf6;
    border-radius: 0.5em;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 1em;
    transition: border-color 0.2s ease-out;
    height: 65px;

  .card:hover .plan-details {
    border-color: #c4d1e1;
  }

  .radio:checked ~ .plan-details {
    border-color: #558309;
  }

  .radio:focus ~ .plan-details {
    box-shadow: 0 0 0 2px #c4d1e1;
  }

  .radio:disabled ~ .plan-details {
    color: #c4d1e1;
    cursor: default;
  }

  .radio:disabled ~ .plan-details .plan-type {
    color: #c4d1e1;
  }

  .card:hover .radio:disabled ~ .plan-details {
    border-color: #e2ebf6;
    box-shadow: none;
  }

  .card:hover .radio:disabled {
    border-color: #e2ebf6;
  }

  .plan-type {
    color: #558309;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1em;
  }

  .plan-cost {
    font-size: 2.5rem;
    font-weight: bold;
    padding: 0.5rem 0;
  }

  .slash {
    font-weight: normal;
  }

  .plan-cycle {
    font-size: 2rem;
    font-variant: none;
    border-bottom: none;
    cursor: inherit;
    text-decoration: none;
  }

  .hidden-visually {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
