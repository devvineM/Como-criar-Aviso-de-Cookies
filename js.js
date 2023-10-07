class CookiesNotice 
{
    constructor(){
        this.key = "@cookies";
        this.init();
    }

    layout(){

        return `
            <div id="cookies-notice">
                <div class="content">
                    <span>
                        Utilizamos cookies para oferecer 
                        melhor experiência, melhorar o 
                        desempenho, analisar como você interage 
                        em nosso site e personalizar conteúdo.
                    </span>
                </div>

                <div class="actions">
                    <button class="reject" onclick="cookiesNotice.remove();">Rejeitar</button>
                    <button class="accept" onclick="cookiesNotice.accept();">Aceitar</button>
                </div>
            </div>
        `;

    }

    save(){

        localStorage.setItem(this.key,true);

    }

    get(){

        const get = localStorage.getItem(this.key) || false;
        return get;

    }

    create(){

        document.body.insertAdjacentHTML("beforeend",this.layout());

    }

    remove(){

        const select = document.querySelector("#cookies-notice");

        select.parentNode.removeChild(select);

    }

    accept(){

        this.save();

        this.remove();

    }

    async init(){

        const status = await this.get();

        if(status) {
            return;
        }

        this.create();

    }
}

const cookiesNotice = new CookiesNotice;