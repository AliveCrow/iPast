function useGetClientRects(refBuilder) {
	return refBuilder.value.getBoundingClientRect()
}

function useResizeListItemHeight(refBuilder) {
	const iheight = ref(0)
	const {
		height
	} = useGetClientRects(refBuilder)
	iheight.value = (height - 20) / 9
	if (iheight.value <= 40) {
		iheight.value = 40
	}
	return iheight.value
}
