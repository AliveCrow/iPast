const tabIndex = computed(() => {
	return (text) => {
		return buttons.value.findIndex(tab => tab.text === text)
	}
})
