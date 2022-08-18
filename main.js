const app = Vue.createApp({
	setup() {
		const buttons = ref([{text: '全部', type: 'all'}, {text: '文本', type: 'text'}, {
			text: '图片',
			type: 'image'
		}, {text: '文件', type: 'files'}])
		const checkedValue = ref(0)
		
		const handleTabClick = (event) => {
			checkedValue.value = tabIndex(event.target.innerText)
		}
		
		// 搜索
		const keyword = ref('')
		const onSearch = () => {
			console.log(keyword)
		}
		const handleClearSearch = () => keyword.value = ''
		
		// 列表高度
		const left = ref(null)
		const itemHeight = ref(0)
		utools.onPluginEnter(({code, type, payload}) => {
			console.log('进入插件')
			itemHeight.value = useResizeListItemHeight(left)
			window.onresize = () => {
				itemHeight.value = useResizeListItemHeight(left)
			}
			
			const modal = document.querySelector('main');
			modal.onmousewheel = (e) => {
				console.log('onmousewheel')
				e.preventDefault();
			}
			
		})
		
		utools.onPluginDetach(() => {
			console.log('分离插件')
			itemHeight.value = useResizeListItemHeight(left)
		})
		
		const fixedDistance = itemHeight
		const beforeInstance = ref(0)
		const thisInstance = ref(0)
		
		const onScroll = (event) => {
			event.preventDefault()
			console.log('onScroll', event)
			beforeInstance.value = 0
			thisInstance.value - beforeInstance.value
		}
		
		const list = ref([])
		const selectedIndex = ref(1)
		const shortKey = ref([])
		
		
		return {
			buttons, checkedValue, handleTabClick, onSearch, keyword, handleClearSearch,
			left, itemHeight, onScroll,
			list, selectedIndex, shortKey
		};
	}
});

app.use(BalmUI);
app.use(BalmUIPlus);
app.mount('#app');
