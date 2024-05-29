$(document).ready(function() {
    // Function to handle file upload using AJAX
    function uploadFile(formData) {
        $.ajax({
            url: '/dashboard/upload/',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                // Handle success response
                console.log(response);
                showMessage('File uploaded successfully.');
            },
            error: function(xhr, status, error) {
                // Handle error response
                console.error(xhr.responseText);
                showMessage('Error uploading file: ' + xhr.responseText);
            }
        });
    }


    // Event listener for upload button click
    $('#uploadBtn').on('click', function() {
        // Create a FormData object to hold the file data
        var formData = new FormData();

        // Append the file to the FormData object
        formData.append('file', $('#fileInput')[0].files[0]);

        // Call the uploadFile function with the FormData object
        uploadFile(formData);
    });
});

function showMessage(message) {
    $('#messageContent').text(message);
    $('#messageModal').modal('show');
}

