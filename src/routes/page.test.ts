import { describe, it, expect } from 'vitest';
import Page from './+page.svelte';
import { render, screen } from '@testing-library/svelte';
import 'vitest-dom/extend-expect'; // required for using matchers like toBeInTheDocument
// todo: ^ should not have to be imported, need to configure vitest.setup.ts, vitest.config.ts and tsconfig

describe('home page UI', () => {
	it('renders text', () => {
		render(Page);
		const text = screen.getByTestId('text');
		expect(text).toHaveTextContent('Content');
	});
});
