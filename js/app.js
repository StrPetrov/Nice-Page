const main = () => {

    let left_top_img = document.querySelector('.left_top_img');
    let left_bot_img = document.querySelector('.left_bot_img');
    let right_bot_img = document.querySelector('.right_bot_img');
    let right_top_img = document.querySelector('.right_top_img');
    let heading = document.querySelector('.heading');
    let nav = document.querySelector('.nav');
    let under_nav = document.querySelector('.under_nav');

    const onReloadFirstSection = () => {
        window.addEventListener('load', () => { 
            left_top_img.style.animation = 'left_top_img .8s ease-out forwards';
            left_bot_img.style.animation = 'left_bot_img .8s ease-out forwards';
            right_bot_img.style.animation = 'right_bot_img .8s ease-out forwards';
            right_top_img.style.animation = 'right_top_img .8s ease-out forwards';
            heading.style.animation = 'heading 1.1s ease-out forwards';
            nav.style.animation = 'heading 1.1s ease-out forwards';
            under_nav.style.animation = 'under_nav 1.5s ease-out forwards';
        })
    }

    let secondSection = document.querySelector('.main_second_section');
    let second_section_title = document.querySelector('.second_section_title');
    let imgToSlideFromLeft = document.querySelector('.slide_from_left');
    let textToSlideFromRight1 = document.querySelector('.slide_from_right1');
    let textToSlideFromRight2 = document.querySelector('.slide_from_right2');

    let imgToSlideFromLeft2 = document.querySelector('.slide_from_left2');
    let textToSlideFromRight3 = document.querySelector('.slide_from_right3');
    let textToSlideFromRight4 = document.querySelector('.slide_from_right4');

    let imgToSlideFromLeft3 = document.querySelector('.slide_from_left3');
    let textToSlideFromRight5 = document.querySelector('.slide_from_right5');
    let textToSlideFromRight6 = document.querySelector('.slide_from_right6');

    let imgToSlideFromLeft4 = document.querySelector('.slide_from_left4');
    let textToSlideFromRight7 = document.querySelector('.slide_from_right7');
    let textToSlideFromRight8 = document.querySelector('.slide_from_right8');

    let footSecond = document.querySelector('.foot_second');

    const secondSectionFunc = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
                    second_section_title.style.animation = 'title 1s ease-out forwards';
                    imgToSlideFromLeft.style.animation = 'slideFromLeft .5s ease-out forwards';
                    textToSlideFromRight1.style.animation = 'slideFromRight .7s ease-out forwards';
                    textToSlideFromRight2.style.animation = 'slideFromRight .7s ease-out forwards';
                    imgToSlideFromLeft2.style.animation = 'slideFromLeft .5s ease-out forwards';
                    textToSlideFromRight3.style.animation = 'slideFromRight .7s ease-out forwards';
                    textToSlideFromRight4.style.animation = 'slideFromRight .7s ease-out forwards';
                    imgToSlideFromLeft3.style.animation = 'slideFromLeft2 .5s ease-out forwards';
                    textToSlideFromRight5.style.animation = 'slideFromRight2h .7s ease-out forwards';
                    textToSlideFromRight6.style.animation = 'slideFromRight2t .7s ease-out forwards';
                    imgToSlideFromLeft4.style.animation = 'slideFromLeft2 .5s ease-out forwards';
                    textToSlideFromRight7.style.animation = 'slideFromRight2h .7s ease-out forwards';
                    textToSlideFromRight8.style.animation = 'slideFromRight2t .7s ease-out forwards';
                    footSecond.style.animation = 'slideUp .5s ease-out forwards';
                }
                else if (entry.isIntersecting === false && entry.boundingClientRect.top >= 0) {
                    second_section_title.style.animation = 'none';
                    imgToSlideFromLeft.style.animation = 'none';
                    textToSlideFromRight1.style.animation = 'none';
                    textToSlideFromRight2.style.animation = 'none';
                    imgToSlideFromLeft2.style.animation = 'none';
                    textToSlideFromRight3.style.animation = 'none';
                    textToSlideFromRight4.style.animation = 'none';
                    imgToSlideFromLeft3.style.animation = 'none';
                    textToSlideFromRight5.style.animation = 'none';
                    textToSlideFromRight6.style.animation = 'none';
                    imgToSlideFromLeft4.style.animation = 'none';
                    textToSlideFromRight7.style.animation = 'none';
                    textToSlideFromRight8.style.animation = 'none';
                    footSecond.style.animation = 'none';
                }
            })
        },{threshold: 0.3});

        observer.observe(secondSection);
    }

    let main_third_section = document.querySelector('.main_third_section');
    let girl_to_slide = document.querySelector('.girl_to_slide');
    let underlay_girl = document.querySelector('.underlay_girl');
    let large_circle = document.querySelector('.large_circle');
    let small_circle = document.querySelector('.small_circle');
    let card1 = document.querySelector('.card1');
    let card2 = document.querySelector('.card2');
    let card3 = document.querySelector('.card3');
    let card4 = document.querySelector('.card4');

    const thirdSectionFunc = () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
                    girl_to_slide.style.animation = 'girlPhotoToSlide 1s ease-out forwards';
                    underlay_girl.style.animation = 'underlayGirl 1s ease-out forwards';
                    large_circle.style.animation = 'largeCircle 1s ease-out forwards';
                    small_circle.style.animation = 'smallCircle 1s ease-out forwards';
                    card1.style.animation = 'card13 1.5s ease-out forwards';
                    card2.style.animation = 'card24 1.5s ease-out forwards';
                    card3.style.animation = 'card13 1.5s ease-out forwards';
                    card4.style.animation = 'card24 1.5s ease-out forwards';
                }
                else if (entry.isIntersecting === false && entry.boundingClientRect.top >= 0) {
                    girl_to_slide.style.animation = 'none';
                    underlay_girl.style.animation = 'none';
                    large_circle.style.animation = 'none';
                    small_circle.style.animation = 'none';
                    card1.style.animation = 'none';
                    card2.style.animation = 'none';
                    card3.style.animation = 'none';
                    card4.style.animation = 'none';
                }
            })
        }, {threshold: 0.2})

        observer.observe(main_third_section);
    }

    let main_forth_section = document.querySelector('.main_forth_section');
    let multicolor_circle = document.querySelector('.multicolor_circle');
    let square = document.querySelector('.square');
    let like_dna = document.querySelector('.like_dna');
    let digital_design = document.querySelector('.digital_design');
    let angle_pipe = document.querySelector('.angle_pipe');
    let donut = document.querySelector('.donut');

    const forthSectionFunc = () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
                    multicolor_circle.style.animation = 'multicolorCircle .7s ease-out forwards';
                    square.style.animation = 'square .7s ease-out forwards';
                    like_dna.style.animation = 'likeDna 1.2s ease-out forwards';
                    digital_design.style.animation = 'digitalDesign .7s ease-out forwards';
                    angle_pipe.style.animation = 'anglePipe 1.2s ease-out forwards';
                    donut.style.animation = 'donut 1s ease-out forwards';
                }
                else if (entry.isIntersecting === false && entry.boundingClientRect.top >= 0) {
                    multicolor_circle.style.animation = 'none';
                    square.style.animation = 'none';
                    like_dna.style.animation = 'none';
                    digital_design.style.animation = 'none';
                    angle_pipe.style.animation = 'none';
                    donut.style.animation = 'none';
                }
            })
        }, {threshold: 0.2})

        observer.observe(main_forth_section);
    }

    let main_fifth_section = document.querySelector('.main_fifth_section');
    let multicolor_large_circle = document.querySelector('.multicolor_large_circle');
    let diagonal = document.querySelector('.diagonal');
    let text_box = document.querySelector('.text_box');
    let fifth_section_square = document.querySelector('.fifth_section_square');
    let fifth_section_like_dna = document.querySelector('.fifth_section_likeDna');

    const fifthSectionFunc = () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
                    multicolor_large_circle.style.animation = 'multicolorLargeCircle 1s ease-out forwards';
                    diagonal.style.animation = 'diagonal .7s ease-out forwards';
                    text_box.style.animation = 'textBox .7s ease-out forwards';
                    fifth_section_square.style.animation = 'fifthSectionSquare .7s ease-out forwards';
                    fifth_section_like_dna.style.animation = 'fifthSectionLikeDna .7s ease-out forwards';

                }
                else if (entry.isIntersecting === false && entry.boundingClientRect.top >= 0) {
                    multicolor_large_circle.style.animation = 'none';
                    diagonal.style.animation = 'none';
                    text_box.style.animation = 'none';
                    fifth_section_square.style.animation= 'none';
                    fifth_section_like_dna.style.animation = 'none';
                }
            })
        }, {threshold: 0.2})

        observer.observe(main_fifth_section);
    }

    let main_sixth_section = document.querySelector('.main_sixth_section');
    let left_text_box = document.querySelector('.left_text_box');
    let scaling = document.querySelector('.scaling');
    let right_text_box = document.querySelector('.right_text_box');

    const sixthSectionFunc = () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
                    left_text_box.style.animation = 'boxRotate 1s ease-out forwards';
                    scaling.style.animation = 'scaling 1s ease-out forwards';
                    right_text_box.style.animation = 'rightTextBox 1s ease-out forwards';
                }
                else if (entry.isIntersecting === false && entry.boundingClientRect.top >= 0) {
                    left_text_box.style.animation = 'none';
                    scaling.style.animation = 'none';
                    right_text_box.style.animation = 'none';
                }
            })
        }, {threshold: 0.5})

        observer.observe(main_sixth_section);
    }

    let main_seventh_section = document.querySelector('.main_seventh_section');
    let pink_colored = document.querySelector('.pink_colored');
    let large_angle_pipe = document.querySelector('.large_angle_pipe');
    let small_angle_pipe = document.querySelector('.small_angle_pipe');
    let scaling_circle = document.querySelector('.scaling_circle');
    let pack = document.querySelector('.pack');
    let final = document.querySelector('.final');

    const seventhSectionFunc = () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
                    pink_colored.style.animation = 'pinkColored 1s ease-out forwards';
                    large_angle_pipe.style.animation = 'largeAnglePipe 1s ease-out forwards';
                    small_angle_pipe.style.animation = 'smallAnglePipe 1s ease-out forwards';
                    scaling_circle.style.animation = 'scalingCircle 1s ease-out forwards';
                    pack.style.animation = 'pack 1s ease-out forwards';
                    final.style.animation = 'final 1s ease-out forwards';
                }
                else if (entry.isIntersecting === false && entry.boundingClientRect.top >= 0) {
                    pink_colored.style.animation = 'none';
                    large_angle_pipe.style.animation = 'none';
                    small_angle_pipe.style.animation = 'none';
                    scaling_circle.style.animation = 'none';
                    pack.style.animation = 'none';
                    final.style.animation = 'none';
                }
            })
        }, {threshold: 0.2})

        observer.observe(main_seventh_section);
    }

    onReloadFirstSection();
    secondSectionFunc();
    thirdSectionFunc();
    forthSectionFunc();
    fifthSectionFunc();
    sixthSectionFunc();
    seventhSectionFunc();
}

main();