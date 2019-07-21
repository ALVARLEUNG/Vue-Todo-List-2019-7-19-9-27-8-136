<template>
  <div>
    <div>
      <h2>Jquery To Do List</h2>
      <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
    </div>
    <div>
      <input class="input-text" type="text" name="ListItem"/>
      <div id="button">Add</div>
    </div>
    <br/>
    <ol></ol>
    <div>
      <ul id="filters">
        <li>
          <a href="#" data-filter="all">ALL</a>
        </li>
        <li>
          <a href="#" data-filter="active">Active</a>
        </li>
        <li>
          <a href="#" data-filter="complete">Complete</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TodoList"
  }
</script>

<style scoped>

</style>
