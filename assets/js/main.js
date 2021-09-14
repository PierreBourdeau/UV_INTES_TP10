$('#submit-btn').on('click', function() {
    let datas = {title: $('#title_input').val(), genre: $('#genre_input').val(), length: $('#length_input').val(), artist: $('#artist_input').val() };
    $.ajax({
        url: '/musics/songs',
        type: 'post',
        data : datas,
        success: function(resp) {
            $('#song-table').html(resp);
            $('input').val('');
        },
    });
});

$('#UUID-btn').on('click', function() {
    $.ajax({
        url: '/musics/songs/'+$('#UUID_input').val(),
        type: 'get',
        success: function(resp) {
            $('#UUID_table').html(resp);
            $('input').val('');
        },
    });
});

$('#edit-submit-btn').on('click', function() {
    let datas = {title: $('#edit_title_input').val(), genre: $('#edit_genre_input').val(), length: $('#edit_length_input').val(), artist: $('#edit_artist_input').val() };
    $.ajax({
        url: '/musics/songs/'+$('#id_input').val(),
        type: 'put',
        data: datas,
        success: function(resp) {
            $('#song-table').html(resp);
            $('input').val('');
        },
    });
});

$('#artistlist-btn').on('click', function() {
    $.ajax({
        url: 'musics/artists',
        type: 'get',
        success: function(resp) {
            $('#artist-list-table').html(resp);
            $('input').val('');
        },
    });
});

function editSong(id) {
    $('#id_input').val(id);
}

function deleteSong(id) {
    $.ajax({
       url: '/musics/songs/'+id+'/delete',
       type: 'get',
        success: function(resp) {
            $('#song-table').html(resp);
            $('input').val('');
        }
    });
}