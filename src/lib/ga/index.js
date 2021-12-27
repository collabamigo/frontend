// log the pageview with their URL
export const pageview = (url) => {
	// eslint-disable-next-line no-undef
	window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
		page_path: url,
	})
}

// log specific events happening.
export const event = ({action, params}) => {
	window.gtag('event', action, params)
}
