import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		min-height: 100%;
		min-width: 1024px;
		font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
		color: ${({ theme }) => theme.colors.txtColor};
		background-color: ${({ theme }) => theme.colors.mainBg};
		transition: .25s background-color ease 0s, .25s color ease 0s;
	}

	#root {
		margin: 0;
		display: flex;
		min-height: 100vh;
		position: relative;
		flex-direction: column;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	a, button {
		cursor: pointer;
	}
`
