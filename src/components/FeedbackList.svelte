<script>
  // import { onMount, onDestroy } from 'svelte';
  import {FeedbackStore} from '../stores'
  import {fade, scale} from 'svelte/transition'
  import FeedbackItem from "./FeedbackItem.svelte";


  // export let feedback = []
  /*
  let feedback = []

  const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)

  onMount(() => {
    console.log('mounted')
  })

  onDestroy(() => {
    unsubscribe()
  })
  */

  // console.log(feedback)
</script>

<!-- Feedback List -->
<!-- {#each feedback as fb (fb.id)} -->
{#each $FeedbackStore as fb (fb.id)}
  <!-- <h3>{fb.text}</h3> -->
  <!-- <div transition:fade> -->
  <div in:scale out:fade="{{duration: 500}}">
    <!-- <FeedbackItem item={fb} on:delete-fdback /> -->
    <FeedbackItem item={fb} />
  </div>
{/each}