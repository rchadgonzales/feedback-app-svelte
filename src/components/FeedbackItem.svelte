<script>
  // import {createEventDispatcher} from 'svelte'
  import {FeedbackStore} from '../stores'
  import Card from "../ui/Card.svelte";
  export let item

  // const dispatch = createEventDispatcher()

  const handleDelete = (itemId) => {
    // console.log(itemId)
    // dispatch('delete-fdback', itemId)
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter(item => item.id != itemId)
    })
  }
</script>

<Card>
  <!-- Hi -->
  <div class="rate-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>

<style>
  .rate-display{
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #FF6A95;
    color: #FFF;
    border: 1px #8C94A4 solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 18px;
  }

  .close{
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>