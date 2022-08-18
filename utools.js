utools.onPluginEnter(({code, type, payload}) => {
	console.log('进入插件')
	const {
		height
	} = useGetClientRects(left)
	itemHeight.value = (height - 90) / 9
})

utools.onPluginDetach(() => {
	console.log('分离插件')
	const {
		height
	} = useGetClientRects(left)
	itemHeight.value = (height - 90) / 9
})
