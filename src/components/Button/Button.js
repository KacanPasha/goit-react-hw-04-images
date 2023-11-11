import './Button.css'

export const ButtonLoadMore = ({onLoadMore}) => {
	return (
		<button className="Button" type="button" onClick={()=>onLoadMore()}>Load more</button>
	)
}