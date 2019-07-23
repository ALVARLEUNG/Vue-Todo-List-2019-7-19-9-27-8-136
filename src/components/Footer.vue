<template>
  <div>
    <ul id="filters">
      <li>
        <a href="#" @click="selectAllItem">ALL</a>
      </li>
      <li>
        <a href="#" @click="selectActiveItem">Active</a>
      </li>
      <li>
        <a href="#" @click="selectCompleteItem">Complete</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    methods: {
      selectAllItem() {
        const filterAll = (itemList) => {
          return itemList;
        }
        this.$emit('filterItems', filterAll);
      },
      selectActiveItem() {
        const filterActive = (itemList) => {
          return itemList.filter(item => item.status === false);
        }
        this.$emit('filterItems', filterActive);
      },
      selectCompleteItem() {
        const filterComplete = (itemList) => {
          return itemList.filter(item => item.status === true);
        }
        this.$emit('filterItems', filterComplete);
      }
    }
  }
</script>

<style scoped>
  li:hover {
    cursor: pointer;
  }

  #filters {
    text-align: center;
    margin-bottom: -10px;
    margin-top: 40px;

  }

  #filters li a {
    color: #fc999b;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  #filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }

  #filters li a.selected, #filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  #filters li {
    display: inline;
    margin: 0 0 5px 0;
    padding: 8px;
    list-style: none;
    outline: none;
  }


</style>
