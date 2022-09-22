<script>
	/*
	// let name = 'Richard';
	let firstName = 'Richard';
	let lastName = 'Gonzales';
	let color = 'green'
	let showText = false
	let users = [
		{
			id: '1',
			name: 'Naruto'
		},
		{
			id: '2',
			name: 'Sasuke'
		},
		{
			id: '3',
			name: 'Sakura'
		},
	]

	// firstName = 'Rectcon'

	$: name = firstName + ' ' + lastName

	const toggle = () => {
		color = color === 'green' ? 'red' : 'green'
		showText = !showText
		users = [...users, {id:'4', name: 'Hinata'}]
	}
	*/

	import FeedbackForm from './components/FeedbackForm.svelte'
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte'

/*
	let feedback = [
	{
		id: 1,
		rating: 10,
		text: '	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam rerum, voluptas ducimus corporis sapiente ea.',
	},
	{
		id: 2,
		rating: 7,
		text: '	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam rerum, voluptas ducimus corporis sapiente ea.',
	},
	{
		id: 3,
		rating: 8,
		text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vel.',
	},
]
*/

/*
$: count = feedback.length
$: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length
*/

/*
const addFeedback = (e) => {
	// console.log(e.detail)
	const newFeedback = e.detail
	feedback = [newFeedback, ...feedback]
}
*/

/*
const deleteFeedback = (e) => {
	// console.log(e.detail)
	const itemId = e.detail
	feedback = feedback.filter((item) => item.id != itemId)
}
*/

</script>

<main class="container">
	<!-- <h1 style="color: {color}">Hello {name}!</h1> -->

	<!-- {#if showText}
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{:else}
	<p>Another text</p>
	{/if} -->
	<!-- <button on:click={() => color = 'purple'}>Click</button> -->
	<!-- <button on:click={toggle}>Click</button> -->

	<!-- {#each users as user (user.id)}
		<h3>{user.id}: {user.name}</h3>
	{/each} -->

	<!-- <h1>Hi</h1> -->
	<!-- <h1>{count}</h1> -->
	<!-- <h1>{average}</h1> -->
	<!-- <FeedbackForm on:add-feedback={addFeedback}/> -->
	<FeedbackForm />
	<!-- <FeedbackStats {count} {average}/> -->
	<FeedbackStats />
	<!-- <FeedbackList {feedback} on:delete-fdback={deleteFeedback} /> -->
	<!-- <FeedbackList on:delete-fdback={deleteFeedback} /> -->
	<FeedbackList />


</main>

<style>
</style>