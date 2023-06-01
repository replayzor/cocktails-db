import styled from "styled-components";

const Wrapper = styled.div`
	p {
		line-height: 2;
		color: var(--grey-500);
		margin-top: 2rem;
	}
	.link {
		text-decoration: none;
		color: var(--orange);
	}

	.link:hover {
		color: red;
	}
`;

export default Wrapper;
