import { RotatingLines } from  'react-loader-spinner'


export const Loader = () => {
	return (
		<div>
			{<RotatingLines
				strokeColor="grey"
				strokeWidth="5"
				animationDuration="0.75"
				width="120"
				visible={true}
			/>}
		</div>
	);
};