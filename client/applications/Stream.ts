




class Stream {

	private vue: vuejs.Vue;
	
	constructor(id: string) {
		
		this.vue = new Vue({
  			el: id,
			data: {
				posts: []
			}
		});

		this.fetch("whatever");
	}

	fetch(request: string) {
		Api.call("/v1/fetch", {}, (response) => this.display(response));
	}

	display(response: any) {
		this.vue.$set('posts', response.posts);
	}

}

