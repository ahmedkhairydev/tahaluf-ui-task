"use strict";

if (innerWidth > 992) document.querySelector('.panel-item[data-content="figure"]').classList.add('active');

// helpers
const displayPanelContent = () => {
    document.getElementById('article-information-content').classList.add('move');
    document.getElementById('article-wrapper').classList.add('overflow-hidden');
    document.getElementById('logo').classList.add('d-none');
    document.getElementById('back').classList.remove('d-none');
};

const hidePanelContent = () => {
    document.getElementById('article-information-content').classList.remove('move');
    document.getElementById('article-wrapper').classList.remove('overflow-hidden');
    document.getElementById('logo').classList.remove('d-none');
    document.getElementById('back').classList.add('d-none');
};

// panel contents
const defaultContent = 'figure',
    panelsContent = {
        figure: `
            <figure class="fig1 d-flex flex-column justify-content-center">
                <img src="./images/figure/figure1.jpg" alt="Figure photo which includes a map" class="img-fluid">
                <figcaption class="font-18 mt-3">
                    Fig. 1.l Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae inventore veritatis laborum
                    repellendus error unde facere.
                </figcaption>
            </figure>

            <hr class="hr text-black">

            <figure class="fig2 d-flex flex-column justify-content-center">
                <img src="./images/figure/figure2.png" alt="Figure photo which includes a map" class="img-fluid">
                <figcaption class="font-18 mt-3">
                    Fig. 2.l Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae inventore veritatis laborum
                    repellendus error unde facere.
                </figcaption>
            </figure>

            <hr class="hr text-black">

            <figure class="fig2 d-flex flex-column justify-content-center">
                <img src="./images/figure/figure3.png" alt="Figure photo which includes a map" class="img-fluid">
                <figcaption class="font-18 mt-3">
                    Fig. 3.l Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae inventore veritatis laborum
                    repellendus error unde facere.
                </figcaption>
            </figure>
        `,
        references: `
            <div class="references">
                <div class="reference1">
                    <h6 class="m-0 title fw-bold">Lorem</h6>
                    <hr class="hr text-grey">

                    <div class="links d-flex flex-column gap-2">
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Lorem ipsum dolor sit amet.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Lorem ipsum dolor sit amet consectetur.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Tempora laudantium ullam quam eos accusantium unde expedita.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Aliquid totam tempora sequi maxime?
                        </a>
                    </div>
                </div>
                
                <div class="reference2 mt-4">
                    <h6 class="m-0 title fw-bold">Lorem</h6>
                    <hr class="hr text-grey">

                    <div class="links d-flex flex-column gap-2">
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Adipisci quaerat eaque officiis debitis quo.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Lorem ipsum dolor sit amet consectetur.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            blanditiis facilis ea beatae ipsam quae ratione saepe?
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Ea quaerat totam voluptatibus libero est alias eligendi laboriosam repellendus repellat.
                        </a>
                    </div>
                </div>
            </div>
        `,
        related: `
            <div class="related">
                <div class="related1">
                    <h6 class="m-0 title fw-bold">Title</h6>
                    <hr class="hr text-grey">

                    <div class="links d-flex flex-column gap-2">
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            blanditiis facilis ea beatae ipsam quae ratione saepe?
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Lorem ipsum dolor sit amet consectetur.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Tempora laudantium ullam quam eos accusantium unde expedita.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Lorem ipsum dolor sit amet.
                        </a>
                    </div>
                </div>
                
                <div class="related2 mt-4">
                    <h6 class="m-0 title fw-bold">Title</h6>
                    <hr class="hr text-grey">

                    <div class="links d-flex flex-column gap-2">
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Nihil corporis minima eveniet quae sint ratione dolorum!
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Lorem ipsum dolor sit amet consectetur.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Aliquid totam tempora sequi maxime?
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Ipsa nisi veniam praesentium adipisci blanditiis.
                        </a>
                    </div>
                </div>
                
                <div class="related2 mt-4">
                    <h6 class="m-0 title fw-bold">Competing Interests</h6>
                    <hr class="hr text-grey">

                    <div class="links d-flex flex-column gap-2">
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Eum doloremque ullam ipsum quod eveniet fuga.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            magnam ab repudiandae deserunt molestias provident quisquam nam unde odit qui.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Porro laudantium similique cum blanditiis quaerat nemo!
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Dolorum dolore quas laborum quod exercitationem alias.
                        </a>
                    </div>
                </div>
            </div>
        `,
        details: `
            <div class="details">
                <div class="detail1">
                    <h6 class="m-0 title fw-bold">Lorem</h6>
                    <hr class="hr text-grey">

                    <div class="links d-flex flex-column gap-2">
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            Nam sit tempore maxime nisi facere blanditiis esse quae.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            numquam rem fugit nemo voluptatibus quam minima ea eaque eum!
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            esse odio asperiores alias hic cum odit.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            labore reprehenderit ea amet rerum vitae ullam minima.
                        </a>
                    </div>
                </div>
                
                <div class="detail2 mt-4">
                    <h6 class="m-0 title fw-bold">Lorem</h6>
                    <hr class="hr text-grey">

                    <div class="links d-flex flex-column gap-2">
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            nisi facere voluptates suscipit assumenda in atque culpa?
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            blanditiis impedit exercitationem voluptatibus quaerat soluta laborum omnis recusandae.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            suscipit facilis nam at consequatur tempore fugiat consequuntur.
                        </a>
                        <a href="javascript:" target="_blank" rel="noopener noreferrer" class="text-black">
                            incidunt autem dolorum quam doloremque commodi!
                        </a>
                    </div>
                </div>
            </div>
        `,
    };

// display the panel content based on the default panel content value
document.getElementById('article-information-content').innerHTML = panelsContent[defaultContent];

document.querySelectorAll('.panel-item').forEach(element => {
    element.addEventListener('click', () => {
        const isActive = element.classList.contains('active');

        if (isActive) {
            element.classList.remove('active');

        } else {
            // add active class in each panel item to display the bottom border in case the screen width is bigger than 992px
            if (innerWidth > 992) {
                document.querySelector('.panel-item.active')?.classList.add('not-active');
                document.querySelector('.panel-item.active')?.classList.remove('active');
                element.classList.add('active');
            } else {
                // display the panel content in case the screen width is lower than 992px
                displayPanelContent();
            }
        }

        // display the panel content based on the panel data-content value
        const eachPanelContent = panelsContent[element.getAttribute('data-content')];
        document.getElementById('article-information-content').innerHTML = eachPanelContent;
    });
});
