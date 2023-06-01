import styled from "styled-components";

const Wrapper = styled.nav`
	background: var(--white);
	box-shadow: none;
	.nav-center {
		width: var(--view-width);
		max-width: var(--max-width);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding: 1.5rem 2rem;
	}
	.logo {
		font-size: 2rem;
		color: var(--primary-500);
		font-weight: 700;
		letter-spacing: 2px;
	}
	.nav-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
	}
	.nav-link {
		color: var(--grey-900);
		padding: 0.5rem 0.5rem 0.5rem 0;
		transition: var(--transition);
		letter-spacing: 2px;
	}
	.nav-link:hover {
		color: var(--primary-500);
	}
	.active {
		color: var(--primary-500);
	}
	.first-word {
		font-size: 2rem;
		color: var(--orange);
		font-weight: bold;
	}

	@media (min-width: 768px) {
		box-shadow: 5px 8px var(--grey-200);
		.nav-center {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		.nav-links {
			flex-direction: row;
			margin-top: 0;
		}
		.first-word {
			font-size: 2rem;
			color: var(--orange);
		}
	}
`;

export default Wrapper;
