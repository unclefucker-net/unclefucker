


class Application {

	private stream: Stream;

	constructor() {
		// hook up the post form
		$('#post').on('click', () => this.post());

		// load the stream
		this.stream = new Stream('#stream');
		
	}

	update() {
		console.log("update");
	}

	post() {
		var text = $('#post-content').val();

		Api.call("/v1/post", {
			text: text
		}, (response) => this.didPost(response));
	}

	didPost(response: any) {
		console.log("didPost", response);
	}
}

// Load the application once the DOM is ready, using jQuery.ready:
$(() => {
    // start the application
    new Application();
});