document.getElementById('upload').addEventListener('change', function(e){
    const preview = document.getElementById('preview');
    preview.innerHTML = '';
    Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(){
            const img = document.createElement('img');
            img.src = reader.result;
            img.style.width = '150px';
            img.style.margin = '10px';
            preview.appendChild(img);
        }
        reader.readAsDataURL(file);
    });
});
