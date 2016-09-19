


class Api {

	public static call(url: string, data: any, callback: (response) => any) {
		$.ajax({
			type: "POST",
			url: url,
			dataType: "json",
			traditional: true,
			data: data,
			success: callback
		});
	}
}