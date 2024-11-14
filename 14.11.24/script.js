// Bütün suallar üçün "question" elementlərini əldə edirik
const questions = document.querySelectorAll('.question');

// Hər bir "question" üçün klikləmə hadisəsini əlavə edirik
questions.forEach(function(question) {
    question.addEventListener('click', function() {
        // Həmin "question" altında olan paragrafı tapırıq
        const paragraph = question.nextElementSibling;  // .nextElementSibling birbaşa alt elementini tapır
        
        // Əgər paragraf gizlidirsə, onu göstəririk; əks halda, gizləyirik
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
        } else {
            paragraph.style.display = 'none';
        }
    });
});

