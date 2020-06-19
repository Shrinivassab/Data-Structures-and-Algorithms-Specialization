$('.photo-list').on('click', 'a', (event) => {
    event.preventDefault();
    $('.gallery__image').attr( 'src', $( this ).attr('href') );
    $('.gallery__title').text( $( this ).text() );
    $('.gallery__caption').text( $( this ).attr('title') );
});
