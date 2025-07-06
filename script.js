 

function mostrar(div,id){
            const checkboxes = document.getElementById(id)
            var dis = "none"
            if(checkboxes.checked){
                dis = "block";
            }
            document.getElementById(div).style.display = dis;
}
let diCh = {
    zhe: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36825.svg" title="这 ( zhe / zhè ) orden de los trazos" width="150" height="150"></object>',
    na:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/37027.svg" title="那 ( na / nà ) orden de los trazos" width="150" height="150"></object>',
    er:  '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20799.svg" title="儿 ( er / ér ) orden de los trazos" width="150" height="150"></object>',
    xue: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23398.svg" title="学 ( xue / xué ) orden de los trazos" width="150" height="150"></object>',
    sheng: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29983.svg" title="生 ( sheng / shēng ) orden de los trazos" width="150" height="150"></object>',
    yi:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21307.svg" title="医 ( yi / yī ) orden de los trazos" width="150" height="150"></object>',
    lao:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32769.svg" title="老 ( lao / lăo ) orden de los trazos" width="150" height="150"></object>',
    shi_maestro:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24072.svg" title="师 ( shi / shī ) orden de los trazos" width="150" height="150"></object>',
    jiao:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25945.svg" title="教 ( jiao / jiāo ) orden de los trazos" width="150" height="150"></object>',
    shou:'<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25480.svg" title="授 ( shou / shòu ) orden de los trazos" width="150" height="150"></object>',
    ji: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35760.svg" title="记 ( ji / jì ) orden de los trazos" width="150" height="150"></object>',
    zhe_elque: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32773.svg" title="者 ( zhe / zhĕ ) orden de los trazos" width="150" height="150"></object>',
    zhong: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20013.svg" title="中 ( zhong / zhōng ) orden de los trazos" width="150" height="150"></object>',
    guo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22269.svg" title="国 ( guo / guó ) orden de los trazos" width="150" height="150"></object>',
    mei: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32654.svg" title="美 ( mei / mĕi ) orden de los trazos" width="150" height="150"></object>',
    ying: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33521.svg" title="英 ( ying / yīng ) orden de los trazos" width="150" height="150"></object>',
    jia: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21152.svg" title="加 ( jia / jiā ) orden de los trazos" width="150" height="150"></object>',
    na_canada: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25343.svg" title="拿 ( na / ná ) orden de los trazos" width="150" height="150"></object>',
    da: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22823.svg" title="大 ( da / dà ) orden de los trazos" width="150" height="150"></object>',
    ri: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26085.svg" title="日 ( ri / rì ) orden de los trazos" width="150" height="150"></object>',
    ben: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26412.svg" title="本 ( ben / bĕn ) orden de los trazos" width="150" height="150"></object>',
    e: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20420.svg" title="俄 ( e / é ) orden de los trazos" width="150" height="150"></object>',
    fa: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27861.svg" title="法 ( fa / fă ) orden de los trazos" width="150" height="150"></object>',
    can: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39184.svg" title="餐 ( can / cān ) orden de los trazos" width="150" height="150"></object>',
    ting: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21381.svg" title="厅 ( ting / tīng ) orden de los trazos" width="150" height="150"></object>',
    yuan: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38498.svg" title="院 ( yuan / yuàn ) orden de los trazos" width="150" height="150"></object>',
    she: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33293.svg" title="舍 ( she / shè ) orden de los trazos" width="150" height="150"></object>',
    su: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23487.svg" title="宿 ( su / sù ) orden de los trazos" width="150" height="150"></object>',
    ce: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21397.svg" title="厕 ( ce / cè ) orden de los trazos" width="150" height="150"></object>',
    suo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25152.svg" title="所 ( suo / suŏ ) orden de los trazos" width="150" height="150"></object>',
    ceng: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23618.svg" title="层 ( ceng / céng ) orden de los trazos" width="150" height="150"></object>',
    zai_otravez: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20877.svg" title="再 ( zai / zài ) orden de los trazos" width="150" height="150"></object>',
    dou: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/37117.svg" title="都 ( dou / dōu ) orden de los trazos" width="150" height="150"></object>',
    hen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24456.svg" title="很 ( hen / hĕn ) orden de los trazos" width="150" height="150"></object>',
    ye: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20063.svg" title="也 ( ye / yĕ ) orden de los trazos" width="150" height="150"></object>',
    na_cual: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21738.svg" title="哪 ( na / nă ) orden de los trazos" width="150" height="150"></object>',
    shen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20160.svg" title="什 ( shen / shén ) orden de los trazos" width="150" height="150"></object>',
    me: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20040.svg" title="么 ( me ) orden de los trazos" width="150" height="150"></object>',
    shei: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35841.svg" title="谁 ( shei / shéi ) orden de los trazos" width="150" height="150"></object>',
    wen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25991.svg" title="文 ( wen / wén ) orden de los trazos" width="150" height="150"></object>',
    yu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35821.svg" title="语 ( yu / yŭ ) orden de los trazos" width="150" height="150"></object>',
    qing: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35831.svg" title="请 ( qing / qĭng ) orden de los trazos" width="150" height="150"></object>',
    wen_preguntar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38382.svg" title="问 ( wen / wèn ) orden de los trazos" width="150" height="150"></object>',
    shi: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26159.svg" title="是 ( shi / shì ) orden de los trazos" width="150" height="150"></object>',
    ke: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21487.svg" title="可 ( ke / kĕ ) orden de los trazos" width="150" height="150"></object>',
    yi_uso: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20197.svg" title="以 ( yi / yĭ ) orden de los trazos" width="150" height="150"></object>',
    zai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22312.svg" title="在 ( zai / zài ) orden de los trazos" width="150" height="150"></object>',
    jiao_llamar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21483.svg" title="叫 ( jiao / jiào ) orden de los trazos" width="150" height="150"></object>', 
    xing: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22995.svg" title="姓 ( xing / xìng ) orden de los trazos" width="150" height="150"></object>',
    zhi: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30693.svg" title="知 ( zhi / zhī ) orden de los trazos" width="150" height="150"></object>',
    dao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36947.svg" title="道 ( dao / dào ) orden de los trazos" width="150" height="150"></object>',
    ren: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35748.svg" title="认 ( ren / rèn ) orden de los trazos" width="150" height="150"></object>',
    shi_reconocer: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35782.svg" title="识 ( shi / shí ) orden de los trazos" width="150" height="150"></object>',
    jin: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36827.svg" title="进 ( jin / jìn ) orden de los trazos" width="150" height="150"></object>',
    lai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26469.svg" title="来 ( lai / lái ) orden de los trazos" width="150" height="150"></object>',
    xi_practica: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20064.svg" title="习 ( xi / xí ) orden de los trazos" width="150" height="150"></object>',
    gao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39640.svg" title="高 ( gao / gāo ) orden de los trazos" width="150" height="150"></object>,',
    xing_feliz: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20852.svg" title="兴 ( xing / xìng ) orden de los trazos" width="150" height="150"></object>',
    xiao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23567.svg" title="小 ( xiao / xiăo ) orden de los trazos" width="150" height="150"></object>',
    hao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22909.svg" title="好 ( hao / hăo ) orden de los trazos" width="150" height="150"></object>',
    wan: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26202.svg" title="晚 ( wan / wăn ) orden de los trazos" width="150" height="150"></object>',
    xie: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35874.svg" title="谢 ( xie / xiè ) orden de los trazos" width="150" height="150"></object>',
    dui: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23545.svg" title="对 ( dui / duì ) orden de los trazos" width="150" height="150"></object>',
    bu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19981.svg" title="不 ( bu / bù ) orden de los trazos" width="150" height="150"></object>',
    qi: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36215.svg" title="起 ( qi / qĭ ) orden de los trazos" width="150" height="150"></object>',
    mei_no: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27809.svg" title="没 ( mei / méi ) orden de los trazos" width="150" height="150"></object>',
    guan: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20851.svg" title="关 ( guan / guān ) orden de los trazos" width="150" height="150"></object>',
    xi: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31995.svg" title="系 ( xi / xì ) orden de los trazos" width="150" height="150"></object>',
    nin: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24744.svg" title="您 ( nin / nín ) orden de los trazos" width="150" height="150"></object>',
    gui: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36149.svg" title="贵 ( gui / guì ) orden de los trazos" width="150" height="150"></object>',
    jian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35265.svg" title="见 ( jian / jiàn ) orden de los trazos" width="150" height="150"></object>',
    he: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21917.svg" title="喝 ( he / hē ) orden de los trazos" width="150" height="150"></object>',
    nan: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30007.svg" title="男 ( nan / nán ) orden de los trazos" width="150" height="150"></object>',
    nu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22899.svg" title="女 ( nü / nǚ ) orden de los trazos" width="150" height="150"></object>',
    shi_erudito: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22763.svg" title="士 ( shi / shì ) orden de los trazos" width="150" height="150"></object>',
    tai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22826.svg" title="太 ( tai / tài ) orden de los trazos" width="150" height="150"></object>',
    peng: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26379.svg" title="朋 ( peng / péng ) orden de los trazos" width="150" height="150"></object>',
    you: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21451.svg" title="友 ( you / yŏu ) orden de los trazos" width="150" height="150"></object>',
    jie: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22992.svg" title="姐 ( jie / jiĕ ) orden de los trazos" width="150" height="150"></object>',
    mei_hermana: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22969.svg" title="妹 ( mei / mèi ) orden de los trazos" width="150" height="150"></object>',
    ge: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21733.svg" title="哥 ( ge / gē ) orden de los trazos" width="150" height="150"></object>',
    di: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24351.svg" title="弟 ( di / dì ) orden de los trazos" width="150" height="150"></object>',
    xian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20808.svg" title="先 ( xian / xiān ) orden de los trazos" width="150" height="150"></object>',
    wai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22806.svg" title="外 ( wai / wài ) orden de los trazos" width="150" height="150"></object>',
    po: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23110.svg" title="婆 ( po / pó ) orden de los trazos" width="150" height="150"></object>',
    nai: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22902.svg" title="奶 ( nai / năi ) orden de los trazos" width="150" height="150"></object>',
    gong: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20844.svg" title="公 ( gong / gōng ) orden de los trazos" width="150" height="150"></object>',
    ye_abuelo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29239.svg" title="爷 ( ye / yé ) orden de los trazos" width="150" height="150"></object>',
    ba: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29240.svg" title="爸 ( ba / bà ) orden de los trazos" width="150" height="150"></object>',
    ma: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22920.svg" title="妈 ( ma / mā ) orden de los trazos" width="150" height="150"></object>',
    han: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27721.svg" title="汉 ( han / hàn ) orden de los trazos" width="150" height="150"></object>',
    a: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38463.svg" title="阿 ( a / ā ) orden de los trazos" width="150" height="150"></object>',
    gen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26681.svg" title="根 ( gen / gēn ) orden de los trazos" width="150" height="150"></object>',
    ting_argentina: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24311.svg" title="廷 ( ting / tíng ) orden de los trazos" width="150" height="150"></object>',
    qu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21435.svg" title="去 ( qu / qù ) orden de los trazos" width="150" height="150"></object>',
    you_nadar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/28216.svg" title="游 ( you / yóu ) orden de los trazos" width="150" height="150"></object>',
    yong: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27891.svg" title="泳 ( yong / yŏng ) orden de los trazos" width="150" height="150"></object>',
    zuo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26152.svg" title="昨 ( zuo / zuó ) orden de los trazos" width="150" height="150"></object>',
    tian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22825.svg" title="天 ( tian / tiān ) orden de los trazos" width="150" height="150"></object>',
    jing: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20140.svg" title="京 ( jing / jīng ) orden de los trazos" width="150" height="150"></object>',
    ju: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21095.svg" title="剧 ( ju / jù ) orden de los trazos" width="150" height="150"></object>',
    zen: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24590.svg" title="怎 ( zen / zĕn ) orden de los trazos" width="150" height="150"></object>',
    yang: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26679.svg" title="样 ( yang / yàng ) orden de los trazos" width="150" height="150"></object>',
    you_tener: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26377.svg" title="有 ( you / yŏu ) orden de los trazos" width="150" height="150"></object>',
    yi_interesante: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24847.svg" title="意 ( yi / yì ) orden de los trazos" width="150" height="150"></object>',
    si: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24605.svg" title="思 ( si / sī ) orden de los trazos" width="150" height="150"></object>',
    jin_hoy: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20170.svg" title="今 ( jin / jīn ) orden de los trazos" width="150" height="150"></object>',
    qi_cielo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27668.svg" title="气 ( qi / qì ) orden de los trazos" width="150" height="150"></object>',
    shi_tiempo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26102.svg" title="时 ( shi / shí ) orden de los trazos" width="150" height="150"></object>',
    hou: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20505.svg" title="候 ( hou / hòu ) orden de los trazos" width="150" height="150"></object>',
    xian_ahora: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29616.svg" title="现 ( xian / xiàn ) orden de los trazos" width="150" height="150"></object>',
    ming: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26126.svg" title="明 ( ming / míng ) orden de los trazos" width="150" height="150"></object>',
    jian_tiempo: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38388.svg" title="间 ( jian / jiān ) orden de los trazos" width="150" height="150"></object>',
    shuo_hablar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35828.svg" title="说 ( shuo / shuō ) orden de los trazos"></object>',
    bian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36941.svg" title="遍 ( bian / biàn ) orden de los trazos" width="150" height="150"></object>',
    da_jugar: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25171.svg" title="打 ( da / dă ) orden de los trazos" width="150" height="150"></object>',
    qiu: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29699.svg" title="球 ( qiu / qiú ) orden de los trazos" width="150" height="150"></object>',
    bao: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25265.svg" title="抱 ( bao / bào ) orden de los trazos" width="150" height="150"></object>',
    qian: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27465.svg" title="歉 ( qian / qiàn ) orden de los trazos" width="150" height="150"></object>',
    kong: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24656.svg" title="恐 ( kong / kŏng ) orden de los trazos" width="150" height="150"></object>',
    pa: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24597.svg" title="怕 ( pa / pà ) orden de los trazos" width="150" height="150"></object>',
    xing_estar_bien: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/34892.svg" title="行 ( xing / xíng ) orden de los trazos" width="150" height="150"></object>',
    kai1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24320.svg" title="开 ( kai / kāi ) orden de los trazos"></object>',
    kan4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30475.svg" title="看 ( kan / kàn ) orden de los trazos"></object>',
    wen4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38382.svg" title="问 ( wen / wèn ) orden de los trazos"></object>',
    yi1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19968.svg" title="一 ( yi / yī ) orden de los trazos"></object>',
    xia4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19979.svg" title="下 ( xia / xià ) orden de los trazos"></object>',
    ming2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21517.svg" title="名 ( ming / míng ) orden de los trazos"></object>',
    pian4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29255.svg" title="片 ( pian / piàn ) orden de los trazos"></object>',
    a4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21834.svg" title="啊 ( a / à ) orden de los trazos"></object>',
    ding1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19969.svg" title="丁 ( ding / dīng ) orden de los trazos"></object>',
    li4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21147.svg" title="力 ( li / lì ) orden de los trazos"></object>',
    bo1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27874.svg" title="波 ( bo / bō ) orden de los trazos"></object>',
    zhang1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24352.svg" title="张 ( zhang / zhāng ) orden de los trazos"></object>',
    jie4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20171.svg" title="介 ( jie / jiè ) orden de los trazos"></object>',
    shao4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32461.svg" title="绍 ( shao / shào ) orden de los trazos"></object>',
    zi4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23383.svg" title="字 ( zi / zì ) orden de los trazos"></object>',
    zhuan1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19987.svg" title="专 ( zhuan / zhuān ) orden de los trazos"></object>',
    ye4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19994.svg" title="业 ( ye / yè ) orden de los trazos"></object>',
    shu4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26415.svg" title="术 ( shu / shù ) orden de los trazos"></object>',
    ma3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39532.svg" title="马 ( ma / mă ) orden de los trazos"></object>',
    wei2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20026.svg" title="为 ( wei / wèi ) orden de los trazos"></object>',
    hua4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21270.svg" title="化 ( hua / huà ) orden de los trazos"></object>',
    li2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21382.svg" title="历 ( li / lì ) orden de los trazos"></object>',
    shi3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21490.svg" title="史 ( shi / shĭ ) orden de los trazos"></object>',
    zhe4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21746.svg" title="哲 ( zhe / zhé ) orden de los trazos"></object>',
    yin1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38899.svg" title="音 ( yin / yīn ) orden de los trazos"></object>',
    yue4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20048.svg" title="乐 ( le / lè ) orden de los trazos"></object>',
    jing1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32463.svg" title="经 ( jing / jīng ) orden de los trazos"></object>',
    ji4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27982.svg" title="济 ( ji / jì ) orden de los trazos"></object>',
    shu4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25968.svg" title="数 ( shu / shŭ ) orden de los trazos"></object>',
    wu4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25968.svg" title="数 ( shu / shŭ ) orden de los trazos"></object>',
    li3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29702.svg" title="理 ( li / lĭ ) orden de los trazos"></object>',
    yu4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32946.svg" title="育 ( yu / yù ) orden de los trazos"></object>',
    xuan3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36873.svg" title="选 ( xuan / xuăn ) orden de los trazos"></object>',
    xiu1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20462.svg" title="修 ( xiu / xiū ) orden de los trazos"></object>',
    jia1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23478.svg" title="家 ( jia / jiā ) orden de los trazos"></object>',
    ji3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20960.svg" title="几 ( ji / jĭ ) orden de los trazos"></object>',
    kou3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21475.svg" title="口 ( kou / kŏu ) orden de los trazos"></object>',
    zhao4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29031.svg" title="照 ( zhao / zhào ) orden de los trazos"></object>',
    he2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21644.svg" title="和 ( he / hé ) orden de los trazos"></object>',
    ge4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20010.svg" title="个 ( ge / gè ) orden de los trazos"></object>',
    liang: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20004.svg" title="两 ( liang / liăng ) orden de los trazos"></object>',
    gong4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20849.svg" title="共 ( gong / gòng ) orden de los trazos"></object>',
    gou3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29399.svg" title="狗 ( gou / gŏu ) orden de los trazos"></object>',
    dang1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24403.svg" title="当 ( dang / dāng ) orden de los trazos"></object>',
    ran2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/28982.svg" title="然 ( ran / rán ) orden de los trazos"></object>',
    zhen1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30495.svg" title="真 ( zhen / zhēn ) orden de los trazos"></object>',
    ai4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29233.svg" title="爱 ( ai / ài ) orden de los trazos"></object>',
    zuo4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20570.svg" title="做 ( zuo / zuò ) orden de los trazos"></object>',
    gong1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24037.svg" title="工 ( gong / gōng ) orden de los trazos"></object>',
    zuo4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20316.svg" title="作 ( zuo / zuò ) orden de los trazos"></object>',
    wang2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29579.svg" title="王 ( wang / wáng ) orden de los trazos"></object>',
    yun2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20113.svg" title="云 ( yun / yún ) orden de los trazos"></object>',
    bei4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36125.svg" title="贝 ( bei / bèi ) orden de los trazos"></object>',
    duo1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22810.svg" title="多 ( duo / duō ) orden de los trazos"></object>',
    shao3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23569.svg" title="少 ( shao / shăo ) orden de los trazos"></object>',
    xi3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21916.svg" title="喜 ( xi / xĭ ) orden de los trazos"></object>',
    huan1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27426.svg" title="欢 ( huan / huān ) orden de los trazos"></object>',
    bai3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30334.svg" title="百 ( bai / băi ) orden de los trazos"></object>',
    che1: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36710.svg" title="车 ( che / chē ) orden de los trazos"></object>',
    ci2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35789.svg" title="词 ( ci / cí ) orden de los trazos"></object>',
    dian3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20856.svg" title="典 ( dian / diăn ) orden de los trazos"></object>',
    dian4: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30005.svg" title="电 ( dian / diàn ) orden de los trazos"></object>',
    nao3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33041.svg" title="脑 ( nao / năo ) orden de los trazos"></object>',
    hai2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23401.svg" title="孩 ( hai / hái ) orden de los trazos"></object>',
    zi3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23376.svg" title="子 ( zi / zĭ ) orden de los trazos"></object>',
    zhu3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20027.svg" title="主 ( zhu / zhŭ ) orden de los trazos"></object>',
    ren2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20219.svg" title="任 ( ren / rèn ) orden de los trazos"></object>',
    zhu2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21161.svg" title="助 ( zhu / zhù ) orden de los trazos"></object>',
    lu2: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24459.svg" title="律 ( lü / lǜ ) orden de los trazos"></object>',
    cheng3: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31243.svg" title="程 ( cheng / chéng ) orden de los trazos"></object>',
    hai2_ademas: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36824.svg" title="还 ( hai / hái ) orden de los trazos"></object>',
    今_jin_jīn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20170.svg" id="ccwSvg" title="今 ( jin / jīn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    年_nian_nián_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24180.svg" id="ccwSvg" title="年 ( nian / nián ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    天_tian_tiān_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22825.svg" id="ccwSvg" title="天 ( tian / tiān ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    怎_zen_zĕn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24590.svg" id="ccwSvg" title="怎 ( zen / zĕn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    么_me_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20040.svg" id="ccwSvg" title="么 ( me ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    样_yang_yàng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26679.svg" id="ccwSvg" title="样 ( yang / yàng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    岁_sui_suì_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23681.svg" id="ccwSvg" title="岁 ( sui / suì ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    课_ke_kè_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35838.svg" id="ccwSvg" title="课 ( ke / kè ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    星_xing_xīng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26143.svg" id="ccwSvg" title="星 ( xing / xīng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    期_qi_qī_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26399.svg" id="ccwSvg" title="期 ( qi / qī ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    上_shang_shàng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19978.svg" id="ccwSvg" title="上 ( shang / shàng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    午_wu_wŭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21320.svg" id="ccwSvg" title="午 ( wu / wŭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    下_xia_xià_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19979.svg" id="ccwSvg" title="下 ( xia / xià ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    日_ri_rì_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26085.svg" id="ccwSvg" title="日 ( ri / rì ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    号_hao_hào_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21495.svg" id="ccwSvg" title="号 ( hao / hào ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    生_sheng_shēng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29983.svg" id="ccwSvg" title="生 ( sheng / shēng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    多_duo_duō_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22810.svg" id="ccwSvg" title="多 ( duo / duō ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    大_da_dà_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22823.svg" id="ccwSvg" title="大 ( da / dà ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    出_chu_chū_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20986.svg" id="ccwSvg" title="出 ( chu / chū ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    属_shu_shŭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23646.svg" id="ccwSvg" title="属 ( shu / shŭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    聚_ju_jù_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32858.svg" id="ccwSvg" title="聚 ( ju / jù ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    会_hui_huì_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20250.svg" id="ccwSvg" title="会 ( hui / huì ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    祝_zhu_zhù_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31069.svg" id="ccwSvg" title="祝 ( zhu / zhù ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    贺_he_hè_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36154.svg" id="ccwSvg" title="贺 ( he / hè ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    参_can_cān_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21442.svg" id="ccwSvg" title="参 ( can / cān ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    加_jia_jiā_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21152.svg" id="ccwSvg" title="加 ( jia / jiā ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    了_le_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20102.svg" id="ccwSvg" title="了 ( le ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    吃_chi_chī_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21507.svg" id="ccwSvg" title="吃 ( chi / chī ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    蛋_dan_dàn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/34507.svg" id="ccwSvg" title="蛋 ( dan / dàn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    糕_gao_gāo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31957.svg" id="ccwSvg" title="糕 ( gao / gāo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    买_mai_măi_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20080.svg" id="ccwSvg" title="买 ( mai / măi ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    瓶_ping_píng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29942.svg" id="ccwSvg" title="瓶 ( ping / píng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    葡_pu_pú_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33889.svg" id="ccwSvg" title="葡 ( pu / pú ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    萄_tao_táo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33796.svg" id="ccwSvg" title="萄 ( tao / táo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    酒_jiu_jiŭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/37202.svg" id="ccwSvg" title="酒 ( jiu / jiŭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    红_hong_hóng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32418.svg" id="ccwSvg" title="红 ( hong / hóng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    北_bei_bĕi_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21271.svg" id="ccwSvg" title="北 ( bei / bĕi ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    京_jing_jīng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20140.svg" id="ccwSvg" title="京 ( jing / jīng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    快_kuai_kuài_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24555.svg" id="ccwSvg" title="快 ( kuai / kuài ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    乐_le_lè_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20048.svg" id="ccwSvg" title="乐 ( le / lè ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    漂_piao_piào_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/28418.svg" id="ccwSvg" title="漂 ( piao / piào ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    亮_liang_liàng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20142.svg" id="ccwSvg" title="亮 ( liang / liàng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    鸭_ya_yā_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/40493.svg" id="ccwSvg" title="鸭 ( ya / yā ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    喝_he_hē_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21917.svg" id="ccwSvg" title="喝 ( he / hē ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    再_zai_zài_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20877.svg" id="ccwSvg" title="再 ( zai / zài ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    面_mian_miàn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38754.svg" id="ccwSvg" title="面 ( mian / miàn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    晚_wan_wăn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26202.svg" id="ccwSvg" title="晚 ( wan / wăn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    茶_cha_chá_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33590.svg" id="ccwSvg" title="茶 ( cha / chá ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    可_ke_kĕ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21487.svg" id="ccwSvg" title="可 ( ke / kĕ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    汉_han_hàn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27721.svg" id="ccwSvg" title="汉 ( han / hàn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    堡_bao_băo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22561.svg" id="ccwSvg" title="堡 ( bao / băo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    包_bao_bāo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21253.svg" id="ccwSvg" title="包 ( bao / bāo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    牛_niu_niú_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29275.svg" id="ccwSvg" title="牛 ( niu / niú ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    奶_nai_năi_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22902.svg" id="ccwSvg" title="奶 ( nai / năi ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    米_mi_mĭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31859.svg" id="ccwSvg" title="米 ( mi / mĭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    饭_fan_fàn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39277.svg" id="ccwSvg" title="饭 ( fan / fàn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    啤_pi_pí_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21860.svg" id="ccwSvg" title="啤 ( pi / pí ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    在_zai_zài_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22312.svg" id="ccwSvg" title="在 ( zai / zài ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    音_yin_yīn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38899.svg" id="ccwSvg" title="音 ( yin / yīn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    商_shang_shāng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21830.svg" id="ccwSvg" title="商 ( shang / shāng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    常_chang_cháng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24120.svg" id="ccwSvg" title="常 ( chang / cháng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    跟_gen_gēn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36319.svg" id="ccwSvg" title="跟 ( gen / gēn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    有_you_yŏu_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26377.svg" id="ccwSvg" title="有 ( you / yŏu ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    名_ming_míng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21517.svg" id="ccwSvg" title="名 ( ming / míng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    书_shu_shū_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20070.svg" id="ccwSvg" title="书 ( shu / shū ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    报_bao_bào_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25253.svg" id="ccwSvg" title="报 ( bao / bào ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    本_ben_bĕn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26412.svg" id="ccwSvg" title="本 ( ben / bĕn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    子_zi_zĭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23376.svg" id="ccwSvg" title="子 ( zi / zĭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    那_na_nà_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/37027.svg" id="ccwSvg" title="那 ( na / nà ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    儿_er_ér_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20799.svg" id="ccwSvg" title="儿 ( er / ér ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    先_xian_xiān_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20808.svg" id="ccwSvg" title="先 ( xian / xiān ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    要_yao_yào_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35201.svg" id="ccwSvg" title="要 ( yao / yào ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    师_shi_shī_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24072.svg" id="ccwSvg" title="师 ( shi / shī ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    傅_fu_fù_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20613.svg" id="ccwSvg" title="傅 ( fu / fù ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    香_xiang_xiāng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39321.svg" id="ccwSvg" title="香 ( xiang / xiāng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    蕉_jiao_jiāo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/34121.svg" id="ccwSvg" title="蕉 ( jiao / jiāo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    苹_ping_píng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33529.svg" id="ccwSvg" title="苹 ( ping / píng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    果_guo_guŏ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26524.svg" id="ccwSvg" title="果 ( guo / guŏ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    对_dui_duì_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23545.svg" id="ccwSvg" title="对 ( dui / duì ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    不_bu_bù_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19981.svg" id="ccwSvg" title="不 ( bu / bù ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    起_qi_qĭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36215.svg" id="ccwSvg" title="起 ( qi / qĭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    容_rong_róng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23481.svg" id="ccwSvg" title="容 ( rong / róng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    易_yi_yì_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26131.svg" id="ccwSvg" title="易 ( yi / yì ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    钱_qian_qián_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38065.svg" id="ccwSvg" title="钱 ( qian / qián ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    斤_jin_jīn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26020.svg" id="ccwSvg" title="斤 ( jin / jīn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    块_kuai_kuài_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22359.svg" id="ccwSvg" title="块 ( kuai / kuài ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    毛_mao_máo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/27611.svg" id="ccwSvg" title="毛 ( mao / máo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    贵_gui_guì_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36149.svg" id="ccwSvg" title="贵 ( gui / guì ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    做_zuo_zuò_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20570.svg" id="ccwSvg" title="做 ( zuo / zuò ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    分_fen_fēn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20998.svg" id="ccwSvg" title="分 ( fen / fēn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    送_song_sòng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36865.svg" id="ccwSvg" title="送 ( song / sòng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    给_gei_gĕi_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32473.svg" id="ccwSvg" title="给 ( gei / gĕi ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    找_zhao_zhăo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25214.svg" id="ccwSvg" title="找 ( zhao / zhăo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    元_yuan_yuán_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20803.svg" id="ccwSvg" title="元 ( yuan / yuán ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    笔_bi_bĭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31508.svg" id="ccwSvg" title="笔 ( bi / bĭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    支_zhi_zhī_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25903.svg" id="ccwSvg" title="支 ( zhi / zhī ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    份_fen_fèn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20221.svg" id="ccwSvg" title="份 ( fen / fèn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    杯_bei_bēi_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26479.svg" id="ccwSvg" title="杯 ( bei / bēi ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    售_shou_shòu_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21806.svg" id="ccwSvg" title="售 ( shou / shòu ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    货_huo_huò_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36135.svg" id="ccwSvg" title="货 ( huo / huò ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    员_yuan_yuán_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21592.svg" id="ccwSvg" title="员 ( yuan / yuán ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    作_zuo_zuò_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20316.svg" id="ccwSvg" title="作 ( zuo / zuò ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    家_jia_jiā_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23478.svg" id="ccwSvg" title="家 ( jia / jiā ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    便_bian_biàn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20415.svg" id="ccwSvg" title="便 ( bian / biàn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    宜_yi_yí_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23452.svg" id="ccwSvg" title="宜 ( yi / yí ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    店_dian_diàn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24215.svg" id="ccwSvg" title="店 ( dian / diàn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    体_ti_tĭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20307.svg" id="ccwSvg" title="体 ( ti / tĭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    育_yu_yù_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/32946.svg" id="ccwSvg" title="育 ( yu / yù ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    馆_guan_guăn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39302.svg" id="ccwSvg" title="馆 ( guan / guăn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    卖_mai_mài_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21334.svg" id="ccwSvg" title="卖 ( mai / mài ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    一_yi_yī_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19968.svg" id="ccwSvg" title="一 ( yi / yī ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    点_dian_diăn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/28857.svg" id="ccwSvg" title="点 ( dian / diăn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    司_si_sī_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21496.svg" id="ccwSvg" title="司 ( si / sī ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    机_ji_jī_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26426.svg" id="ccwSvg" title="机 ( ji / jī ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    钟_zhong_zhōng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38047.svg" id="ccwSvg" title="钟 ( zhong / zhōng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    差_cha_chà_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24046.svg" id="ccwSvg" title="差 ( cha / chà ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    刻_ke_kè_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21051.svg" id="ccwSvg" title="刻 ( ke / kè ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    回_hui_huí_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22238.svg" id="ccwSvg" title="回 ( hui / huí ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    能_neng_néng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33021.svg" id="ccwSvg" title="能 ( neng / néng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    到_dao_dào_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21040.svg" id="ccwSvg" title="到 ( dao / dào ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    哪_na_nă_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21738.svg" id="ccwSvg" title="哪 ( na / nă ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    里_li_lĭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/37324.svg" id="ccwSvg" title="里 ( li / lĭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    教_jiao_jiāo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25945.svg" id="ccwSvg" title="教 ( jiao / jiāo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    英_ying_yīng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33521.svg" id="ccwSvg" title="英 ( ying / yīng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    语_yu_yŭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35821.svg" id="ccwSvg" title="语 ( yu / yŭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    女_nü_nǚ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22899.svg" id="ccwSvg" title="女 ( nü / nǚ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    数_shu_shŭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25968.svg" id="ccwSvg" title="数 ( shu / shŭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    还_hai_hái_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36824.svg" id="ccwSvg" title="还 ( hai / hái ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    因_yin_yīn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22240.svg" id="ccwSvg" title="因 ( yin / yīn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    为_wei_wèi_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20026.svg" id="ccwSvg" title="为 ( wei / wèi ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    什_shen_shén_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20160.svg" id="ccwSvg" title="什 ( shen / shén ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    昨_zuo_zuó_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26152.svg" id="ccwSvg" title="昨 ( zuo / zuó ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    东_dong_dōng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/19996.svg" id="ccwSvg" title="东 ( dong / dōng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    西_xi_xī_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35199.svg" id="ccwSvg" title="西 ( xi / xī ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    玩_wan_wán_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29609.svg" id="ccwSvg" title="玩 ( wan / wán ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    半_ban_bàn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21322.svg" id="ccwSvg" title="半 ( ban / bàn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    写_xie_xiĕ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20889.svg" id="ccwSvg" title="写 ( xie / xiĕ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    字_zi_zì_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23383.svg" id="ccwSvg" title="字 ( zi / zì ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    睡_shui_shuì_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30561.svg" id="ccwSvg" title="睡 ( shui / shuì ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    觉_jue_jué_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35273.svg" id="ccwSvg" title="觉 ( jue / jué ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    床_chuang_chuáng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24202.svg" id="ccwSvg" title="床 ( chuang / chuáng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    应_ying_yìng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24212.svg" id="ccwSvg" title="应 ( ying / yìng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    该_gai_gāi_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/35813.svg" id="ccwSvg" title="该 ( gai / gāi ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    问_wen_wèn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38382.svg" id="ccwSvg" title="问 ( wen / wèn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    题_ti_tí_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39064.svg" id="ccwSvg" title="题 ( ti / tí ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    以_yi_yĭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20197.svg" id="ccwSvg" title="以 ( yi / yĭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    陈_chen_chén_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38472.svg" id="ccwSvg" title="陈 ( chen / chén ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    开_kai_kāi_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/24320.svg" id="ccwSvg" title="开 ( kai / kāi ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    车_che_chē_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36710.svg" id="ccwSvg" title="车 ( che / chē ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    跳_tiao_tiào_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36339.svg" id="ccwSvg" title="跳 ( tiao / tiào ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    舞_wu_wŭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/33310.svg" id="ccwSvg" title="舞 ( wu / wŭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    答_da_dá_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31572.svg" id="ccwSvg" title="答 ( da / dá ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    礼_li_lĭ_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/31036.svg" id="ccwSvg" title="礼 ( li / lĭ ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    物_wu_wù_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29289.svg" id="ccwSvg" title="物 ( wu / wù ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    吸_xi_xī_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/21560.svg" id="ccwSvg" title="吸 ( xi / xī ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    烟_yan_yān_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/28895.svg" id="ccwSvg" title="烟 ( yan / yān ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    表_biao_biăo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/34920.svg" id="ccwSvg" title="表 ( biao / biăo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    难_nan_nán_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/38590.svg" id="ccwSvg" title="难 ( nan / nán ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    打_da_dă_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25171.svg" id="ccwSvg" title="打 ( da / dă ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    的_de_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/30340.svg" id="ccwSvg" title="的 ( de ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    拜_bai_bài_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/25308.svg" id="ccwSvg" title="拜 ( bai / bài ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    孙_sun_sūn_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23385.svg" id="ccwSvg" title="孙 ( sun / sūn ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    梁_liang_liáng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/26753.svg" id="ccwSvg" title="梁 ( liang / liáng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    场_chang_chăng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/22330.svg" id="ccwSvg" title="场 ( chang / chăng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    热_re_rè_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/28909.svg" id="ccwSvg" title="热 ( re / rè ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    狗_gou_gŏu_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/29399.svg" id="ccwSvg" title="狗 ( gou / gŏu ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    餐_can_cān_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/39184.svg" id="ccwSvg" title="餐 ( can / cān ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    中_zhong_zhōng_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20013.svg" id="ccwSvg" title="中 ( zhong / zhōng ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    寿_shou_shòu_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/23551.svg" id="ccwSvg" title="寿 ( shou / shòu ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>',
    烤_kao_kăo_ : '<object class="ccwSvg" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/28900.svg" id="ccwSvg" title="烤 ( kao / kăo ) orden de los trazos" type="image/svg+xml" width="150" height="150"></object>'

}
let caracteresPinyinTraduccion = [

    //PRONOMBRES DEMOSTRATIVOS------------------------------------------------
    {   
        categoria: "pron dem",
        //pinyin
        pinyin: 'zhè',        
        //traduccion
        traduccion: 'este, esto',
        //caracter
        caracter: diCh.zhe

    },
    {   
        categoria: "pron dem",
        //pinyin
        pinyin: 'nà',        
        //traduccion
        traduccion: 'aquel',
        //caracter
        caracter: diCh.na

    },
    {   
        categoria: "pron dem",
        //pinyin
        pinyin: 'zhèr',        
        //traduccion
        traduccion: 'aquí/acá',
        //caracter
        caracter: diCh.zhe + diCh.er

    },
    {   
        categoria: "pron dem",
        //pinyin
        pinyin: 'nàr',        
        //traduccion
        traduccion: 'allá/ahí/allí',
        //caracter
        caracter: diCh.na + diCh.er

    },
    //ESTUDIO------------------------------------------------------------------
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xué',        
        //traduccion
        traduccion: 'estudio',
        //caracter
        caracter: diCh.xue

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xuéxí',        
        //traduccion
        traduccion: 'estudiar',
        //caracter
        caracter: diCh.xue + diCh.xi_practica

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xuésheng',        
        //traduccion
        traduccion: 'estudiante',
        //caracter
        caracter: diCh.xue + diCh.sheng

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xuéyuàn',        
        //traduccion
        traduccion: 'institución educativa',
        //caracter
        caracter: diCh.xue + diCh.yuan 

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'xiăoxué',        
        //traduccion
        traduccion: 'primaria',
        //caracter
        caracter: diCh.xiao + diCh.xue
    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'zhōngxué',        
        //traduccion
        traduccion: 'secundaria',
        //caracter
        caracter: diCh.zhong + diCh.xue

    },
    {   
        categoria: "estudio",
        //pinyin
        pinyin: 'dàxué',        
        //traduccion
        traduccion: 'universidad',
        //caracter
        caracter: diCh.da + diCh.xue

    },
    //PROFESIONES---------------------------------------------------------------
    {   
        categoria: "profesiones",
        //pinyin
        pinyin: 'yīshēng',        
        //traduccion
        traduccion: 'médico/a // doctor/a',
        //caracter
        caracter: diCh.yi + diCh.sheng

    },
    {   
        categoria: "profesiones",
        //pinyin
        pinyin: 'lăoshī',        
        //traduccion
        traduccion: 'maestro/a',
        //caracter
        caracter: diCh.lao + diCh.shi_maestro

    },
    {   
        categoria: "profesiones",
        //pinyin
        pinyin: 'jiàoshòu',        
        //traduccion
        traduccion: 'profesor/a',
        //caracter
        caracter: diCh.jiao + diCh.shou

    },
    {   
        categoria: "profesiones",
        //pinyin
        pinyin: 'jìzhĕ',        
        //traduccion
        traduccion: 'periodista',
        //caracter
        caracter: diCh.ji + diCh.zhe_elque

    },
    //PAISES-------------------------------------------------------------------
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Zhōngguó',        
        //traduccion
        traduccion: 'China',
        //caracter
        caracter: diCh.zhong +diCh.guo

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Āgēntíng',        
        //traduccion
        traduccion: 'Argentina',
        //caracter
        caracter: diCh.a + diCh.gen + diCh.ting_argentina
    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Mĕiguó',        
        //traduccion
        traduccion: 'USA',
        //caracter
        caracter: diCh.mei + diCh.guo

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Yīngguó',        
        //traduccion
        traduccion: 'Gran Bretaña',
        //caracter
        caracter: diCh.ying +diCh.guo

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Jiānádà',        
        //traduccion
        traduccion: 'Canadá',
        //caracter
        caracter: diCh.jia + diCh.na_canada +diCh.da

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Rìbĕn',        
        //traduccion
        traduccion: 'Japón',
        //caracter
        caracter: diCh.ri + diCh.ben

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'éguó',        
        //traduccion
        traduccion: 'Rusia',
        //caracter
        caracter: diCh.e +diCh.guo

    },
    {   
        categoria: "paises",
        //pinyin
        pinyin: 'Făguó',        
        //traduccion
        traduccion: 'Francia',
        //caracter
        caracter: diCh.fa +diCh.guo

    },
    //LUGARES-----------------------------------------------------------------
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'cāntīng',        
        //traduccion
        traduccion: 'comedor',
        //caracter
        caracter: diCh.can +diCh.ting

    },
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'sushè',        
        //traduccion
        traduccion: 'dormitorio',
        //caracter
        caracter: diCh.su + diCh.she

    },
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'cèsuŏ',        
        //traduccion
        traduccion: 'baño',
        //caracter
        caracter: diCh.ce + diCh.suo

    },
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'céng',        
        //traduccion
        traduccion: 'piso',
        //caracter
        caracter: diCh.ceng

    },
    //ADJETIVOS--------------------------------------------------------
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'dōu',        
        //traduccion
        traduccion: 'todo/todos/ambos',
        //caracter
        caracter: diCh.dou

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'hĕn',        
        //traduccion
        traduccion: 'mucho',
        //caracter
        caracter: diCh.hen

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'gāoxìng',        
        //traduccion
        traduccion: 'encantado',
        //caracter
        caracter: diCh.gao + diCh.xing_feliz

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'dà',        
        //traduccion
        traduccion: 'grande',
        //caracter
        caracter: diCh.da

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'xiăo',        
        //traduccion
        traduccion: 'pequeño',
        //caracter
        caracter: diCh.xiao

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'hăo',        
        //traduccion
        traduccion: 'bueno/bien',
        //caracter
        caracter: diCh.hao

    },
    {   
        categoria: "adjetivos",
        //pinyin
        pinyin: 'wán',        
        //traduccion
        traduccion: 'tarde',
        //caracter
        caracter: diCh.wan

    },
    //ADVERBIOS-----------------------------------------------------------------
    {   
        categoria: "adverbio",
        //pinyin
        pinyin: 'yĕ',        
        //traduccion
        traduccion: 'también',
        //caracter
        caracter: diCh.ye

    },
    {   
        categoria: "preguntas",
        //pinyin
        pinyin: 'năr',        
        //traduccion
        traduccion: 'dónde',
        //caracter
        caracter: diCh.na_cual + diCh.er

    },
    {   
        categoria: "preguntas",
        //pinyin
        pinyin: 'nă',        
        //traduccion
        traduccion: 'cuál',
        //caracter
        caracter: diCh.na_cual

    },
    {   
        categoria: "preguntas",
        //pinyin
        pinyin: 'shénme',        
        //traduccion
        traduccion: 'qué',
        //caracter
        caracter: diCh.shen + diCh.me

    },
    {   
        categoria: "preguntas",
        //pinyin
        pinyin: 'shéi',        
        //traduccion
        traduccion: 'quién',
        //caracter
        caracter: diCh.shei

    },
    //IDIOMAS---------------------------------------------------------------------------
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Zhōngwén',        
        //traduccion
        traduccion: 'idioma chino',
        //caracter
        caracter: diCh.zhong + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Hànyŭ',        
        //traduccion
        traduccion: 'idioma chino (idioma de los han)',
        //caracter
        caracter: diCh.han + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Yīngwén',        
        //traduccion
        traduccion: 'idioma inglés',
        //caracter
        caracter: diCh.ying + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Yīngyŭ',        
        //traduccion
        traduccion: 'idioma inglés',
        //caracter
        caracter: diCh.ying + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Rìwén',        
        //traduccion
        traduccion: 'idioma japonés',
        //caracter
        caracter: diCh.ri + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Rìyŭ',
        //traduccion
        traduccion: 'idioma japonés',
        //caracter
        caracter: diCh.ri + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'èwén',        
        //traduccion
        traduccion: 'idioma ruso',
        //caracter
        caracter: diCh.e + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'èyŭ',        
        //traduccion
        traduccion: 'idioma ruso',
        //caracter
        caracter: diCh.e + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Făyŭ',        
        //traduccion
        traduccion: 'idioma francés',
        //caracter
        caracter: diCh.fa + diCh.yu

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'Făwén',        
        //traduccion
        traduccion: 'idioma francés',
        //caracter
        caracter: diCh.fa + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'wàiwèn',        
        //traduccion
        traduccion: 'idioma extranjero',
        //caracter
        caracter: diCh.wai + diCh.wen

    },
    {   
        categoria: "idiomas",
        //pinyin
        pinyin: 'wàiyŭ',        
        //traduccion
        traduccion: 'idioma extranjero',
        //caracter
        caracter: diCh.wai + diCh.yu

    },
    //VERBOS--------------------------------------------------------------------------
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'shì',        
        //traduccion
        traduccion: 'ser',
        //caracter
        caracter: diCh.shi

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'wèn',        
        //traduccion
        traduccion: 'preguntar',
        //caracter
        caracter: diCh.wen_preguntar

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'kĕyĭ',        
        //traduccion
        traduccion: 'poder',
        //caracter
        caracter: diCh.ke + diCh.yi_uso

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'zài',        
        //traduccion
        traduccion: 'estar',
        //caracter
        caracter: diCh.zai

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jiào',        
        //traduccion
        traduccion: 'llamarse/nombre',
        //caracter
        caracter: diCh.jiao_llamar

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'xìng',        
        //traduccion
        traduccion: 'apellidarse/apellido',
        //caracter
        caracter: diCh.xing

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'zhīdao',        
        //traduccion
        traduccion: 'saber',
        //caracter
        caracter: diCh.zhi + diCh.dao

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'rènshi',        
        //traduccion
        traduccion: 'conocer',
        //caracter
        caracter: diCh.ren + diCh.shi_reconocer

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jìn',        
        //traduccion
        traduccion: 'entrar',
        //caracter
        caracter: diCh.jin

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'lái',        
        //traduccion
        traduccion: 'venir',
        //caracter
        caracter: diCh.lai

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jìnlái',        
        //traduccion
        traduccion: 'entrar',
        //caracter
        caracter: diCh.jin + diCh.lai

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'hē',        
        //traduccion
        traduccion: 'beber',
        //caracter
        caracter: diCh.he

    },
    //ETIQUETA---------------------------------------------------------------------------
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'xièxie',        
        //traduccion
        traduccion: 'gracias',
        //caracter
        caracter:  diCh.xie + diCh.xie

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'duì bùqĭ',        
        //traduccion
        traduccion: 'perdón/ lo siento',
        //caracter
        caracter: diCh.dui + diCh.bu + diCh.qi

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'qĭngwèn',        
        //traduccion
        traduccion: 'porfavor una pregunta',
        //caracter
        caracter: diCh.qing + diCh.wen_preguntar

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'méi guānxi',        
        //traduccion
        traduccion: 'no pasa nada',
        //caracter
        caracter: diCh.mei_no + diCh.guan  + diCh.xi

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'nín guì xìng',        
        //traduccion
        traduccion: 'su nombre?',
        //caracter
        caracter:  diCh.nin + diCh.gui + diCh.xing

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'zàijiàn ',        
        //traduccion
        traduccion: 'adiós',
        //caracter
        caracter: diCh.zai_otravez + diCh.jian

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'zài ',        
        //traduccion
        traduccion: 'otra vez',
        //caracter
        caracter: diCh.zai_otravez

    },
    //PERSONAS---------------------------------------------------------------------------------
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nán',        
        //traduccion
        traduccion: 'hombre',
        //caracter
        caracter: diCh.nan

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nǚ',        
        //traduccion
        traduccion: 'mujer',
        //caracter
        caracter: diCh.nu

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nánshì',        
        //traduccion
        traduccion: 'hombre',
        //caracter
        caracter: diCh.nan + diCh.shi_erudito

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nǚshì',        
        //traduccion
        traduccion: 'mujer',
        //caracter
        caracter: diCh.nu + diCh.shi_erudito

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'tàitai',        
        //traduccion
        traduccion: 'señora',
        //caracter
        caracter: diCh.tai + diCh.tai

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nánpéngyou',        
        //traduccion
        traduccion: 'novio',
        //caracter
        caracter: diCh.nan + diCh.peng + diCh.you

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'nǚpéngyou',        
        //traduccion
        traduccion: 'novia',
        //caracter
        caracter: diCh.nu + diCh.peng + diCh.you

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'jiĕjie',        
        //traduccion
        traduccion: 'hermana mayor',
        //caracter
        caracter: diCh.jie + diCh.jie

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'mèimei',        
        //traduccion
        traduccion: 'hermana menor',
        //caracter
        caracter: diCh.mei_hermana + diCh.mei_hermana

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'gēge',        
        //traduccion
        traduccion: 'hermano mayor',
        //caracter
        caracter: diCh.ge + diCh.ge

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'dìdi',        
        //traduccion
        traduccion: 'hermano menor',
        //caracter
        caracter: diCh.di + diCh.di

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'xiăojiĕ',        
        //traduccion
        traduccion: 'señorita',
        //caracter
        caracter: diCh.xiao + diCh.jie

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'xiānsheng',        
        //traduccion
        traduccion: 'señor',
        //caracter
        caracter: diCh.xian + diCh.sheng

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'wàipó',        
        //traduccion
        traduccion: 'abuela materna',
        //caracter
        caracter: diCh.wai + diCh.po

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'năinai',        
        //traduccion
        traduccion: 'abuela paterna',
        //caracter
        caracter: diCh.nai + diCh.nai

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'wàigōng',        
        //traduccion
        traduccion: 'abuelo materno',
        //caracter
        caracter: diCh.wai + diCh.gong

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'yéye',        
        //traduccion
        traduccion: 'abuelo paterno',
        //caracter
        caracter: diCh.ye_abuelo + diCh.ye_abuelo

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'bàba',        
        //traduccion
        traduccion: 'papá',
        //caracter
        caracter: diCh.ba + diCh.ba

    },
    {   
        categoria: "personas",
        //pinyin
        pinyin: 'māma',        
        //traduccion
        traduccion: 'mamá',
        //caracter
        caracter: diCh.ma + diCh.ma

    },
    //BEBIDAS--------------------------------------------------------------------------
    //NUMEROS--------------------------------------------------------------------------

    
    //--------------------------------------------------------------------------
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'qù',        
        //traduccion
        traduccion: 'ir',
        //caracter
        caracter: diCh.qu

    },

    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'yóuyŏng',        
        //traduccion
        traduccion: 'nadar',
        //caracter
        caracter: diCh.you_nadar + diCh.yong

    },

    
    {   
        categoria: "",
        //pinyin
        pinyin: 'zuótiān',        
        //traduccion
        traduccion: 'ayer',
        //caracter
        caracter: diCh.zuo + diCh.tian

    },

    {   
        categoria: "",
        //pinyin
        pinyin: 'jīngjù',        
        //traduccion
        traduccion: 'Ópera de Pekín',
        //caracter
        caracter: diCh.jing + diCh.ju

    },

    
    {   
        categoria: "",
        //pinyin
        pinyin: 'zĕnmeyàng',        
        //traduccion
        traduccion: '¿qué tal?',
        //caracter
        caracter: diCh.zen + diCh.me + diCh.yang

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'yŏu yìsi',        
        //traduccion
        traduccion: 'interesante',
        //caracter
        caracter: diCh.you_tener + diCh.yi_interesante + diCh.si

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'jīntiān',        
        //traduccion
        traduccion: 'hoy',
        //caracter
        caracter: diCh.jin_hoy + diCh.tian

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'tiān',        
        //traduccion
        traduccion: 'día',
        //caracter
        caracter: diCh.tian

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'tiānqì',        
        //traduccion
        traduccion: 'atmosférico',
        //caracter
        caracter: diCh.tai + diCh.qi_cielo

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'tài',        
        //traduccion
        traduccion: 'demasiado',
        //caracter
        caracter: diCh.tai

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'shíhou',        
        //traduccion
        traduccion: 'tiempo; momento',
        //caracter
        caracter: diCh.shi_tiempo + diCh.hou

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'xiànzài',        
        //traduccion
        traduccion: 'ahora',
        //caracter
        caracter: diCh.xian_ahora + diCh.zai

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'míngtiān',        
        //traduccion
        traduccion: 'mañana',
        //caracter
        caracter: diCh.ming + diCh.tian

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'yŏu',        
        //traduccion
        traduccion: 'tener',
        //caracter
        caracter: diCh.you_tener

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'shíjiān',        
        //traduccion
        traduccion: 'tiempo',
        //caracter
        caracter: diCh.shi_tiempo + diCh.jian_tiempo

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'shuō',        
        //traduccion
        traduccion: 'hablar',
        //caracter
        caracter: diCh.shuo_hablar

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'biàn',        
        //traduccion
        traduccion: 'numero de veces (de una acción)',
        //caracter
        caracter: diCh.bian

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'dă qiú',        
        //traduccion
        traduccion: 'jugar a la pelota',
        //caracter
        caracter: diCh.da_jugar + diCh.qiu

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'dă',        
        //traduccion
        traduccion: 'jugar',
        //caracter
        caracter: diCh.da_jugar

    },
    {   
        categoria: "sustantivos",
        //pinyin
        pinyin: 'qiú',        
        //traduccion
        traduccion: 'pelota',
        //caracter
        caracter: diCh.qiu

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'bàoqiàn',        
        //traduccion
        traduccion: 'lo siento',
        //caracter
        caracter: diCh.bao + diCh.qian

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'kŏngpà',        
        //traduccion
        traduccion: 'quizás, tener que',
        //caracter
        caracter: diCh.kong + diCh.pa

    },
    {   
        categoria: "",
        //pinyin
        pinyin: 'xíng',        
        //traduccion
        traduccion: 'estar bien',
        //caracter
        caracter: diCh.xing_estar_bien

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'kāixué',        
        //traduccion
        traduccion: 'empezar el colegio',
        //caracter
        caracter: diCh.kai1 + diCh.xue 

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'kāi',        
        //traduccion
        traduccion: 'empezar',
        //caracter
        caracter: diCh.kai1

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'gāo',        
        //traduccion
        traduccion: 'alto',
        //caracter
        caracter: diCh.gao

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'kàn',        
        //traduccion
        traduccion: 'mirar, ver',
        //caracter
        caracter: diCh.kan4

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'yíxià',        
        //traduccion
        traduccion: 'brevemente',
        //caracter
        caracter: diCh.yi1 + diCh.xia4

    },
    {   
        categoria: "sustantivos",
        //pinyin
        pinyin: 'mingpìan',        
        //traduccion
        traduccion: 'tarjeta de presentación',
        //caracter
        caracter: diCh.ming2 + diCh.pian4

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'à',        
        //traduccion
        traduccion: 'ah, oh',
        //caracter
        caracter: diCh.a4

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jiāo',        
        //traduccion
        traduccion: 'enseñar',
        //caracter
        caracter: diCh.jiao

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Dīng Lìbō',        
        //traduccion
        traduccion: 'Ding Libo un nombre',
        //caracter
        caracter: diCh.ding1 +diCh.li4 + diCh.bo1

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Zhāng',        
        //traduccion
        traduccion: 'Zhang un apellido',
        //caracter
        caracter: diCh.zhang1

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'jièshào',        
        //traduccion
        traduccion: 'presentar',
        //caracter
        caracter: diCh.jie4 + diCh.shao4

    },
    {   
        categoria: "etiqueta",
        //pinyin
        pinyin: 'míngzi',        
        //traduccion
        traduccion: 'nombre',
        //caracter
        caracter: diCh.ming2 + diCh.zi4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'zhuānyè',        
        //traduccion
        traduccion: 'carrera, especialidad',
        //caracter
        caracter: diCh.zhuan1 + diCh.ye4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'měishù',        
        //traduccion
        traduccion: 'bellas artes',
        //caracter
        caracter: diCh.mei + diCh.shu4

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'měi',        
        //traduccion
        traduccion: 'bello',
        //caracter
        caracter: diCh.mei

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'wénxué',        
        //traduccion
        traduccion: 'literatura',
        //caracter
        caracter: diCh.wen + diCh.xue

    },
    {   
        categoria: "lugares",
        //pinyin
        pinyin: 'xì',        
        //traduccion
        traduccion: 'facultad',
        //caracter
        caracter: diCh.xi

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Mǎ Dàwéi',        
        //traduccion
        traduccion: 'nombre',
        //caracter
        caracter: diCh.ma3 + diCh.da + diCh.wei2

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'wénhuà',
        //traduccion
        traduccion: 'cultura',
        //caracter
        caracter: diCh.wen + diCh.hua4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'lìshǐ',        
        //traduccion
        traduccion: 'historia',
        //caracter
        caracter: diCh.li4 + diCh.shi3

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'zhéxué',        
        //traduccion
        traduccion: 'filosofía',
        //caracter
        caracter: diCh.zhe4 + diCh.xue

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'yīnyuè',        
        //traduccion
        traduccion: 'música',
        //caracter
        caracter: diCh.yin1 + diCh.yue4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'jīngjì',        
        //traduccion
        traduccion: 'economía',
        //caracter
        caracter: diCh.jing1 + diCh.ji4

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'shùxué',        
        //traduccion
        traduccion: 'matemáticas',
        //caracter
        caracter: diCh.shu4 + diCh.xue

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'wùlǐ',        
        //traduccion
        traduccion: 'física',
        //caracter
        caracter: diCh.wu4 + diCh.li3

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'huàxué',        
        //traduccion
        traduccion: 'química',
        //caracter
        caracter: diCh.hua4 + diCh.xue

    },
    {   
        categoria: "materia",
        //pinyin
        pinyin: 'jiàoyù',        
        //traduccion
        traduccion: 'educación',
        //caracter
        caracter: diCh.jiao + diCh.yu4

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'xuǎnxiū',        
        //traduccion
        traduccion: 'escoger una asignatura optativa',
        //caracter
        caracter: diCh.xuan3 + diCh.xiu1

    },
    {   
        categoria: "sustantivos",
        //pinyin
        pinyin: 'jiā',        
        //traduccion
        traduccion: 'hogar,familia',
        //caracter
        caracter: diCh.jia1

    },
    {   
        categoria: "adverbio int",
        //pinyin
        pinyin: 'jǐ',        
        //traduccion
        traduccion: 'cuántos',
        //caracter
        caracter: diCh.ji3

    },
    {   
        categoria: "clasificador",
        //pinyin
        pinyin: 'kǒu',        
        //traduccion
        traduccion: 'clasificador para miembros de la familia',
        //caracter
        caracter: diCh.kou3

    },
    {   
        categoria: "sustantivos",
        //pinyin
        pinyin: 'zhàopiàn',        
        //traduccion
        traduccion: 'fotografía',
        //caracter
        caracter: diCh.zhao4 + diCh.pian4

    },
    {   
        categoria: "conjunción",
        //pinyin
        pinyin: 'hé',        
        //traduccion
        traduccion: 'y',
        //caracter
        caracter: diCh.he2

    },
    {   
        categoria: "clasificador",
        //pinyin
        pinyin: 'gè',        
        //traduccion
        traduccion: 'clasificador de uso general (gè)',
        //caracter
        caracter: diCh.ge4

    },
    {   
        categoria: "numero",
        //pinyin
        pinyin: 'liǎng',        
        //traduccion
        traduccion: 'dos',
        //caracter
        caracter: diCh.liang

    },
    {   
        categoria: "adverbio",
        //pinyin
        pinyin: 'hái',        
        //traduccion
        traduccion: 'además',
        //caracter
        caracter: diCh.hai2_ademas

    },
    {   
        categoria: "adverbio",
        //pinyin
        pinyin: 'yígòng',        
        //traduccion
        traduccion: 'en total',
        //caracter
        caracter: diCh.yi1 + diCh.gong4

    },
    {   
        categoria: "animales",
        //pinyin
        pinyin: 'gǒu',
        //traduccion
        traduccion: 'perro',
        //caracter
        caracter: diCh.gou3

    },
    {   
        categoria: "clasificador",
        //pinyin
        pinyin: 'zhāng',        
        //traduccion
        traduccion: 'clasificador de objetos planos',
        //caracter
        caracter: diCh.zhang1

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'dāngrán',        
        //traduccion
        traduccion: 'por supuesto',
        //caracter
        caracter: diCh.dang1 + diCh.ran2

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'zhēn',        
        //traduccion
        traduccion: 'realmente',
        //caracter
        caracter: diCh.zhen1

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'kě\'ài',        
        //traduccion
        traduccion: 'adorable',
        //caracter
        caracter: diCh.ke + diCh.ai4

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'ài',        
        //traduccion
        traduccion: 'amar',
        //caracter
        caracter: diCh.ai4

    },
    {   
        categoria: "adverbio",
        //pinyin
        pinyin: 'méi',        
        //traduccion
        traduccion: 'no',
        //caracter
        caracter: diCh.mei_no

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'zuò',        
        //traduccion
        traduccion: 'hacer',
        //caracter
        caracter: diCh.zuo4

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'gōngzuò',        
        //traduccion
        traduccion: 'trabajo, trabajar',
        //caracter
        caracter: diCh.gong1 + diCh.zuo4

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Wáng Xiǎoyún',        
        //traduccion
        traduccion: 'nombre',
        //caracter
        caracter: diCh.wang2 + diCh.xiao + diCh.yun2

    },
    {   
        categoria: "nombre",
        //pinyin
        pinyin: 'Bèibei',        
        //traduccion
        traduccion: 'nombre de un perro',
        //caracter
        caracter: diCh.bei4 + diCh.bei4

    },
    {   
        categoria: "adverbio int",
        //pinyin
        pinyin: 'duōshao',        
        //traduccion
        traduccion: 'cuántos',
        //caracter
        caracter: diCh.duo1 + diCh.shao3

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'duō',        
        //traduccion
        traduccion: 'mucho',
        //caracter
        caracter: diCh.duo1

    },
    {   
        categoria: "adjetivo",
        //pinyin
        pinyin: 'shǎo',        
        //traduccion
        traduccion: 'poco',
        //caracter
        caracter: diCh.shao3

    },
    {   
        categoria: "verbos",
        //pinyin
        pinyin: 'xǐhuan',        
        //traduccion
        traduccion: 'gustar, preferir',
        //caracter
        caracter: diCh.xi3 + diCh.huan1

    },
    {   
        categoria: "país",
        //pinyin
        pinyin: 'wàiguó',        
        //traduccion
        traduccion: 'país extranjero',
        //caracter
        caracter: diCh.wai + diCh.gou3

    },
    {   
        categoria: "número",
        //pinyin
        pinyin: 'bǎi',        
        //traduccion
        traduccion: 'cien',
        //caracter
        caracter: diCh.bai3

    },
    {   
        categoria: "sustantivos",
        //pinyin
        pinyin: 'chē',        
        //traduccion
        traduccion: 'coche, auto',
        //caracter
        caracter: diCh.che1

    },
    {   
        categoria: "sustantivos",
        //pinyin
        pinyin: 'cídiǎn',        
        //traduccion
        traduccion: 'diccionario',
        //caracter
        caracter: diCh.ci2 + diCh.dian3

    },
    {   
        categoria: "sustantivos",
        //pinyin
        pinyin: 'diànnǎo',        
        //traduccion
        traduccion: 'computadora, ordenador',
        //caracter
        caracter: diCh.dian4 + diCh.nao3

    },
    {   
        categoria: "sustantivos",
        //pinyin
        pinyin: 'háizi',        
        //traduccion
        traduccion: 'niño',
        //caracter
        caracter: diCh.hai2 + diCh.zi3

    },
    {   
        categoria: "profesión",
        //pinyin
        pinyin: 'xìzhǔrèn',        
        //traduccion
        traduccion: 'jefe de departamento',
        //caracter
        caracter: diCh.xi + diCh.zhu3 + diCh.ren2

    },
    {   
        categoria: "profesión",
        //pinyin
        pinyin: 'zhùjiào',        
        //traduccion
        traduccion: 'ayudante de profesor',
        //caracter
        caracter: diCh.zhu2 + diCh.jiao

    },
    {   
        categoria: "profesión",
        //pinyin
        pinyin: 'lǜshī',        
        //traduccion
        traduccion: 'abogado',
        //caracter
        caracter: diCh.lu2 + diCh.shi_maestro

    },
    {   
        categoria: "profesión",
        //pinyin
        pinyin: 'gōngchéngshī',        
        //traduccion
        traduccion: 'ingeniero',
        //caracter
        caracter: diCh.gong1 + diCh.cheng3 + diCh.shi_maestro

    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "jīnnián",
    //traduccion
    traduccion: "este año",
    //caracter
    caracter: diCh.今_jin_jīn_ + diCh.年_nian_nián_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "nián",
    //traduccion
    traduccion: "año",
    //caracter
    caracter: diCh.年_nian_nián_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "jīntiān",
    //traduccion
    traduccion: "hoy",
    //caracter
    caracter: diCh.今_jin_jīn_ + diCh.天_tian_tiān_
    },
    {categoria: "etiqueta",
    //pinyin
    pinyin: "zĕnmeyàng",
    //traduccion
    traduccion: "cómo",
    //caracter
    caracter: diCh.怎_zen_zĕn_ + diCh.么_me_ + diCh.样_yang_yàng_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "suì",
    //traduccion
    traduccion: "año",
    //caracter
    caracter: diCh.岁_sui_suì_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "kè",
    //traduccion
    traduccion: "clase, lección",
    //caracter
    caracter: diCh.课_ke_kè_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "xīngqī",
    //traduccion
    traduccion: "semana",
    //caracter
    caracter: diCh.星_xing_xīng_ + diCh.期_qi_qī_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "shàngwŭ",
    //traduccion
    traduccion: "por la mañana",
    //caracter
    caracter: diCh.上_shang_shàng_ + diCh.午_wu_wŭ_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "shàng",
    //traduccion
    traduccion: "encima, pasado",
    //caracter
    caracter: diCh.上_shang_shàng_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "xiàwŭ",
    //traduccion
    traduccion: "por la tarde",
    //caracter
    caracter: diCh.下_xia_xià_ + diCh.午_wu_wŭ_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "xià",
    //traduccion
    traduccion: "debajo, próximo",
    //caracter
    caracter: diCh.下_xia_xià_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "xīngqīrì",
    //traduccion
    traduccion: "domingo",
    //caracter
    caracter: diCh.星_xing_xīng_ + diCh.期_qi_qī_ + diCh.日_ri_rì_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "hào",
    //traduccion
    traduccion: "día del mes",
    //caracter
    caracter: diCh.号_hao_hào_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "shēngrì",
    //traduccion
    traduccion: "cumpleaños",
    //caracter
    caracter: diCh.生_sheng_shēng_ + diCh.日_ri_rì_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "shēng",
    //traduccion
    traduccion: "nacer",
    //caracter
    caracter: diCh.生_sheng_shēng_
    },
    {categoria: "preguntas",
    //pinyin
    pinyin: "duōdà",
    //traduccion
    traduccion: "¿cuantos años (edad)?",
    //caracter
    caracter: diCh.多_duo_duō_ + diCh.大_da_dà_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "duō",
    //traduccion
    traduccion: "mucho",
    //caracter
    caracter: diCh.多_duo_duō_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "dà",
    //traduccion
    traduccion: "grande",
    //caracter
    caracter: diCh.大_da_dà_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "chūshēng",
    //traduccion
    traduccion: "nacer",
    //caracter
    caracter: diCh.出_chu_chū_ + diCh.生_sheng_shēng_
    },
    {categoria: "adverbio",
    //pinyin
    pinyin: "chū",
    //traduccion
    traduccion: "salir",
    //caracter
    caracter: diCh.出_chu_chū_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "shŭ",
    //traduccion
    traduccion: "nacer en el año de (signo)",
    //caracter
    caracter: diCh.属_shu_shŭ_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "jùhuì",
    //traduccion
    traduccion: "fiesta",
    //caracter
    caracter: diCh.聚_ju_jù_ + diCh.会_hui_huì_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "huì",
    //traduccion
    traduccion: "reunión",
    //caracter
    caracter: diCh.会_hui_huì_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "zhùhè",
    //traduccion
    traduccion: "felicitar, felicitación",
    //caracter
    caracter: diCh.祝_zhu_zhù_ + diCh.贺_he_hè_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "zhù",
    //traduccion
    traduccion: "desear, felicitar",
    //caracter
    caracter: diCh.祝_zhu_zhù_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "cānjiā",
    //traduccion
    traduccion: "participar,asistir",
    //caracter
    caracter: diCh.参_can_cān_ + diCh.加_jia_jiā_
    },
    {categoria: "partícula",
    //pinyin
    pinyin: "le",
    //traduccion
    traduccion: "partícula modal/partícula de aspecto",
    //caracter
    caracter: diCh.了_le_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "chī",
    //traduccion
    traduccion: "comer",
    //caracter
    caracter: diCh.吃_chi_chī_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "dàngāo",
    //traduccion
    traduccion: "pastel",
    //caracter
    caracter: diCh.蛋_dan_dàn_ + diCh.糕_gao_gāo_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "dàn",
    //traduccion
    traduccion: "huevo",
    //caracter
    caracter: diCh.蛋_dan_dàn_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "gāo",
    //traduccion
    traduccion: "pastel",
    //caracter
    caracter: diCh.糕_gao_gāo_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "măi",
    //traduccion
    traduccion: "comprar",
    //caracter
    caracter: diCh.买_mai_măi_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "píng",
    //traduccion
    traduccion: "botella",
    //caracter
    caracter: diCh.瓶_ping_píng_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "pútáojiŭ",
    //traduccion
    traduccion: "vino",
    //caracter
    caracter: diCh.葡_pu_pú_ + diCh.萄_tao_táo_ + diCh.酒_jiu_jiŭ_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "hóng",
    //traduccion
    traduccion: "rojo",
    //caracter
    caracter: diCh.红_hong_hóng_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "pútao",
    //traduccion
    traduccion: "uva",
    //caracter
    caracter: diCh.葡_pu_pú_ + diCh.萄_tao_táo_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "jiŭ",
    //traduccion
    traduccion: "bebida alcohólica",
    //caracter
    caracter: diCh.酒_jiu_jiŭ_
    },
    {categoria: "lugares",
    //pinyin
    pinyin: "Bĕijīng",
    //traduccion
    traduccion: "Pekín",
    //caracter
    caracter: diCh.北_bei_bĕi_ + diCh.京_jing_jīng_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "kuàilè",
    //traduccion
    traduccion: "feliz",
    //caracter
    caracter: diCh.快_kuai_kuài_ + diCh.乐_le_lè_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "piàoliang",
    //traduccion
    traduccion: "guapa(chica), bonito(cosas)",
    //caracter
    caracter: diCh.漂_piao_piào_ + diCh.亮_liang_liàng_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "yā",
    //traduccion
    traduccion: "pato",
    //caracter
    caracter: diCh.鸭_ya_yā_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "hē",
    //traduccion
    traduccion: "beber",
    //caracter
    caracter: diCh.喝_he_hē_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "zài",
    //traduccion
    traduccion: "otra vez",
    //caracter
    caracter: diCh.再_zai_zài_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "miàn",
    //traduccion
    traduccion: "tallarines",
    //caracter
    caracter: diCh.面_mian_miàn_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "wănshang",
    //traduccion
    traduccion: "noche",
    //caracter
    caracter: diCh.晚_wan_wăn_ + diCh.上_shang_shàng_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "chá",
    //traduccion
    traduccion: "té",
    //caracter
    caracter: diCh.茶_cha_chá_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "kĕlè",
    //traduccion
    traduccion: "Coca Cola",
    //caracter
    caracter: diCh.可_ke_kĕ_ + diCh.乐_le_lè_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "Hànbăo",
    //traduccion
    traduccion: "hamburguesa",
    //caracter
    caracter: diCh.汉_han_hàn_ + diCh.堡_bao_băo_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "miànbāo",
    //traduccion
    traduccion: "pan",
    //caracter
    caracter: diCh.面_mian_miàn_ + diCh.包_bao_bāo_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "niúnăi",
    //traduccion
    traduccion: "leche (de vaca)",
    //caracter
    caracter: diCh.牛_niu_niú_ + diCh.奶_nai_năi_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "mĭfàn",
    //traduccion
    traduccion: "arroz",
    //caracter
    caracter: diCh.米_mi_mĭ_ + diCh.饭_fan_fàn_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "píjiŭ",
    //traduccion
    traduccion: "cerveza",
    //caracter
    caracter: diCh.啤_pi_pí_ + diCh.酒_jiu_jiŭ_
    },
    {categoria: "adverbio",
    //pinyin
    pinyin: "zài",
    //traduccion
    traduccion: "en, dentro de, sobre",
    //caracter
    caracter: diCh.在_zai_zài_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "yīnyuè",
    //traduccion
    traduccion: "música",
    //caracter
    caracter: diCh.音_yin_yīn_ + diCh.乐_le_lè_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "shāng",
    //traduccion
    traduccion: "comercio, negocio",
    //caracter
    caracter: diCh.商_shang_shāng_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "chángcháng",
    //traduccion
    traduccion: "frecuentemente",
    //caracter
    caracter: diCh.常_chang_cháng_ + diCh.常_chang_cháng_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "cháng",
    //traduccion
    traduccion: "constantemente",
    //caracter
    caracter: diCh.常_chang_cháng_
    },
    {categoria: "adverbio",
    //pinyin
    pinyin: "gēn",
    //traduccion
    traduccion: "con, seguir",
    //caracter
    caracter: diCh.跟_gen_gēn_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "yŏumíng",
    //traduccion
    traduccion: "famoso",
    //caracter
    caracter: diCh.有_you_yŏu_ + diCh.名_ming_míng_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "shū",
    //traduccion
    traduccion: "libro",
    //caracter
    caracter: diCh.书_shu_shū_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "bào",
    //traduccion
    traduccion: "periódico",
    //caracter
    caracter: diCh.报_bao_bào_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "bĕnzi",
    //traduccion
    traduccion: "cuaderno",
    //caracter
    caracter: diCh.本_ben_bĕn_ + diCh.子_zi_zĭ_
    },
    {categoria: "adverbio",
    //pinyin
    pinyin: "nàr",
    //traduccion
    traduccion: "allí",
    //caracter
    caracter: diCh.那_na_nà_ + diCh.儿_er_ér_
    },
    {categoria: "etiqueta",
    //pinyin
    pinyin: "xiānsheng",
    //traduccion
    traduccion: "señor",
    //caracter
    caracter: diCh.先_xian_xiān_ + diCh.生_sheng_shēng_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "yào",
    //traduccion
    traduccion: "querer",
    //caracter
    caracter: diCh.要_yao_yào_
    },
    {categoria: "etiqueta",
    //pinyin
    pinyin: "shīfu",
    //traduccion
    traduccion: "maestro, profesional de oficio",
    //caracter
    caracter: diCh.师_shi_shī_ + diCh.傅_fu_fù_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "xiāngjiāo",
    //traduccion
    traduccion: "plátano",
    //caracter
    caracter: diCh.香_xiang_xiāng_ + diCh.蕉_jiao_jiāo_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "píngguŏ",
    //traduccion
    traduccion: "manzana",
    //caracter
    caracter: diCh.苹_ping_píng_ + diCh.果_guo_guŏ_
    },
    {categoria: "etiqueta",
    //pinyin
    pinyin: "duì bùqĭ",
    //traduccion
    traduccion: "lo siento",
    //caracter
    caracter: diCh.对_dui_duì_ + diCh.不_bu_bù_ + diCh.起_qi_qĭ_
    },
    {categoria: "preguntas",
    //pinyin
    pinyin: "zĕnme",
    //traduccion
    traduccion: "¿cómo?",
    //caracter
    caracter: diCh.怎_zen_zĕn_ + diCh.么_me_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "róngyì",
    //traduccion
    traduccion: "fácil",
    //caracter
    caracter: diCh.容_rong_róng_ + diCh.易_yi_yì_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "qián",
    //traduccion
    traduccion: "dinero",
    //caracter
    caracter: diCh.钱_qian_qián_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "jīn",
    //traduccion
    traduccion: "clasificador de peso-equivalente a medio kilo",
    //caracter
    caracter: diCh.斤_jin_jīn_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "kuài",
    //traduccion
    traduccion: "clasificador para unidades básicas de moneda china",
    //caracter
    caracter: diCh.块_kuai_kuài_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "máo",
    //traduccion
    traduccion: "clasificador para unidades de moneda china",
    //caracter
    caracter: diCh.毛_mao_máo_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "guì",
    //traduccion
    traduccion: "caro, apreciado",
    //caracter
    caracter: diCh.贵_gui_guì_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "zuò",
    //traduccion
    traduccion: "hacer",
    //caracter
    caracter: diCh.做_zuo_zuò_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "fēn",
    //traduccion
    traduccion: "minuto, clasificador de unidades de moneda china",
    //caracter
    caracter: diCh.分_fen_fēn_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "sòng",
    //traduccion
    traduccion: "regalar",
    //caracter
    caracter: diCh.送_song_sòng_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "gĕi",
    //traduccion
    traduccion: "dar",
    //caracter
    caracter: diCh.给_gei_gĕi_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "zhăo",
    //traduccion
    traduccion: "dar cambio",
    //caracter
    caracter: diCh.找_zhao_zhăo_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "yuán",
    //traduccion
    traduccion: "clasificador para unidades básicas de moneda china, pero utilizado en la lengua escrita",
    //caracter
    caracter: diCh.元_yuan_yuán_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "bĭ",
    //traduccion
    traduccion: "lapiz",
    //caracter
    caracter: diCh.笔_bi_bĭ_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "zhī",
    //traduccion
    traduccion: "clasificador para utelsilios con forma de palo, como lápices",
    //caracter
    caracter: diCh.支_zhi_zhī_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "fèn",
    //traduccion
    traduccion: "clasificador para publicaciones como periodicos",
    //caracter
    caracter: diCh.份_fen_fèn_
    },
    {categoria: "clasificador",
    //pinyin
    pinyin: "bĕn",
    //traduccion
    traduccion: "clasificador (para libros)",
    //caracter
    caracter: diCh.本_ben_bĕn_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "bēi",
    //traduccion
    traduccion: "taza",
    //caracter
    caracter: diCh.杯_bei_bēi_
    },
    {categoria: "profesiones",
    //pinyin
    pinyin: "shòuhuòyuán",
    //traduccion
    traduccion: "dependiente, vendedor",
    //caracter
    caracter: diCh.售_shou_shòu_ + diCh.货_huo_huò_ + diCh.员_yuan_yuán_
    },
    {categoria: "profesiones",
    //pinyin
    pinyin: "zuòjiā",
    //traduccion
    traduccion: "autor, escritor",
    //caracter
    caracter: diCh.作_zuo_zuò_ + diCh.家_jia_jiā_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "piányi",
    //traduccion
    traduccion: "barato, económico",
    //caracter
    caracter: diCh.便_bian_biàn_ + diCh.宜_yi_yí_
    },
    {categoria: "lugares",
    //pinyin
    pinyin: "shūdiàn",
    //traduccion
    traduccion: "librería",
    //caracter
    caracter: diCh.书_shu_shū_ + diCh.店_dian_diàn_
    },
    {categoria: "lugares",
    //pinyin
    pinyin: "tĭyùguăn",
    //traduccion
    traduccion: "gimnasio",
    //caracter
    caracter: diCh.体_ti_tĭ_ + diCh.育_yu_yù_ + diCh.馆_guan_guăn_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "mài",
    //traduccion
    traduccion: "vender",
    //caracter
    caracter: diCh.卖_mai_mài_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "huì",
    //traduccion
    traduccion: "saber hacer",
    //caracter
    caracter: diCh.会_hui_huì_
    },
    {categoria: "adverbio",
    //pinyin
    pinyin: "yīdiănr",
    //traduccion
    traduccion: "un poco",
    //caracter
    caracter: diCh.一_yi_yī_ + diCh.点_dian_diăn_ + diCh.儿_er_ér_
    },
    {categoria: "profesiones",
    //pinyin
    pinyin: "sījī",
    //traduccion
    traduccion: "conductor",
    //caracter
    caracter: diCh.司_si_sī_ + diCh.机_ji_jī_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "diănzhōng",
    //traduccion
    traduccion: "hora (unidad de tiempo)",
    //caracter
    caracter: diCh.点_dian_diăn_ + diCh.钟_zhong_zhōng_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "chà",
    //traduccion
    traduccion: "ir corto de, carecer de",
    //caracter
    caracter: diCh.差_cha_chà_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "kè",
    //traduccion
    traduccion: "un cuarto (de hora)",
    //caracter
    caracter: diCh.刻_ke_kè_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "huí",
    //traduccion
    traduccion: "volver",
    //caracter
    caracter: diCh.回_hui_huí_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "shàng kè",
    //traduccion
    traduccion: "asistir a clase",
    //caracter
    caracter: diCh.上_shang_shàng_ + diCh.课_ke_kè_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "shàng",
    //traduccion
    traduccion: "ascender, ir",
    //caracter
    caracter: diCh.上_shang_shàng_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "néng",
    //traduccion
    traduccion: "poder",
    //caracter
    caracter: diCh.能_neng_néng_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "dào",
    //traduccion
    traduccion: "llegar",
    //caracter
    caracter: diCh.到_dao_dào_
    },
    {categoria: "etiqueta",
    //pinyin
    pinyin: "năli",
    //traduccion
    traduccion: "no (expresion de negación que denota modestia)",
    //caracter
    caracter: diCh.哪_na_nă_ + diCh.里_li_lĭ_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "jiāo",
    //traduccion
    traduccion: "enseñar",
    //caracter
    caracter: diCh.教_jiao_jiāo_
    },
    {categoria: "idiomas",
    //pinyin
    pinyin: "Yīngyŭ",
    //traduccion
    traduccion: "Inglés (idioma)",
    //caracter
    caracter: diCh.英_ying_yīng_ + diCh.语_yu_yŭ_
    },
    {categoria: "familia",
    //pinyin
    pinyin: "nǚ'ér",
    //traduccion
    traduccion: "hija",
    //caracter
    caracter: diCh.女_nü_nǚ_ + diCh.儿_er_ér_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "suìshu",
    //traduccion
    traduccion: "años (edad)",
    //caracter
    caracter: diCh.岁_sui_suì_ + diCh.数_shu_shŭ_
    },
    {categoria: "numero",
    //pinyin
    pinyin: "shŭ",
    //traduccion
    traduccion: "número",
    //caracter
    caracter: diCh.数_shu_shŭ_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "hái",
    //traduccion
    traduccion: "todavía",
    //caracter
    caracter: diCh.还_hai_hái_
    },
    {categoria: "preguntas",
    //pinyin
    pinyin: "yīnwèi",
    //traduccion
    traduccion: "porque",
    //caracter
    caracter: diCh.因_yin_yīn_ + diCh.为_wei_wèi_
    },
    {categoria: "preguntas",
    //pinyin
    pinyin: "wèi shénme",
    //traduccion
    traduccion: "¿por qué?",
    //caracter
    caracter: diCh.为_wei_wèi_ + diCh.什_shen_shén_ + diCh.么_me_
    },
    {categoria: "adverbio",
    //pinyin
    pinyin: "wèi",
    //traduccion
    traduccion: "para",
    //caracter
    caracter: diCh.为_wei_wèi_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "zuótiān",
    //traduccion
    traduccion: "ayer",
    //caracter
    caracter: diCh.昨_zuo_zuó_ + diCh.天_tian_tiān_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "dōngxi",
    //traduccion
    traduccion: "cosas, objetos",
    //caracter
    caracter: diCh.东_dong_dōng_ + diCh.西_xi_xī_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "wánr",
    //traduccion
    traduccion: "pasarlo bien, jugar",
    //caracter
    caracter: diCh.玩_wan_wán_ + diCh.儿_er_ér_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "wănshang",
    //traduccion
    traduccion: "tarde",
    //caracter
    caracter: diCh.晚_wan_wăn_ + diCh.上_shang_shàng_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "wăn",
    //traduccion
    traduccion: "tarde",
    //caracter
    caracter: diCh.晚_wan_wăn_
    },
    {categoria: "tiempo",
    //pinyin
    pinyin: "bàn",
    //traduccion
    traduccion: "mitad, medio (para media hora)",
    //caracter
    caracter: diCh.半_ban_bàn_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "xiĕ",
    //traduccion
    traduccion: "escribir",
    //caracter
    caracter: diCh.写_xie_xiĕ_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "Hànzì",
    //traduccion
    traduccion: "Carácter chino",
    //caracter
    caracter: diCh.汉_han_hàn_ + diCh.字_zi_zì_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "zì",
    //traduccion
    traduccion: "caracter",
    //caracter
    caracter: diCh.字_zi_zì_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "shuìjiào",
    //traduccion
    traduccion: "dormir",
    //caracter
    caracter: diCh.睡_shui_shuì_ + diCh.觉_jue_jué_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "shuì",
    //traduccion
    traduccion: "dormir",
    //caracter
    caracter: diCh.睡_shui_shuì_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "qĭ chuáng",
    //traduccion
    traduccion: "levantarse",
    //caracter
    caracter: diCh.起_qi_qĭ_ + diCh.床_chuang_chuáng_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "qĭ",
    //traduccion
    traduccion: "levantarse, ponerse en pie",
    //caracter
    caracter: diCh.起_qi_qĭ_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "chuáng",
    //traduccion
    traduccion: "cama",
    //caracter
    caracter: diCh.床_chuang_chuáng_
    },
    {categoria: "adverbio",
    //pinyin
    pinyin: "yīnggāi",
    //traduccion
    traduccion: "debería",
    //caracter
    caracter: diCh.应_ying_yìng_ + diCh.该_gai_gāi_
    },
    {categoria: "adverbio",
    //pinyin
    pinyin: "gāi",
    //traduccion
    traduccion: "debería",
    //caracter
    caracter: diCh.该_gai_gāi_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "wèntí",
    //traduccion
    traduccion: "pregunta",
    //caracter
    caracter: diCh.问_wen_wèn_ + diCh.题_ti_tí_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "kĕyĭ",
    //traduccion
    traduccion: "poder",
    //caracter
    caracter: diCh.可_ke_kĕ_ + diCh.以_yi_yĭ_
    },
    {categoria: "nombre",
    //pinyin
    pinyin: "chén",
    //traduccion
    traduccion: "Chen (un apellido)",
    //caracter
    caracter: diCh.陈_chen_chén_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "xià kè",
    //traduccion
    traduccion: "salir de clase, acabar la clase",
    //caracter
    caracter: diCh.下_xia_xià_ + diCh.课_ke_kè_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "chī fàn",
    //traduccion
    traduccion: "comer, tomar (una comida)",
    //caracter
    caracter: diCh.吃_chi_chī_ + diCh.饭_fan_fàn_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "kāichē",
    //traduccion
    traduccion: "conducir un coche",
    //caracter
    caracter: diCh.开_kai_kāi_ + diCh.车_che_chē_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "tiàowŭ",
    //traduccion
    traduccion: "bailar",
    //caracter
    caracter: diCh.跳_tiao_tiào_ + diCh.舞_wu_wŭ_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "huídá",
    //traduccion
    traduccion: "responder",
    //caracter
    caracter: diCh.回_hui_huí_ + diCh.答_da_dá_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "lĭwù",
    //traduccion
    traduccion: "regalo",
    //caracter
    caracter: diCh.礼_li_lĭ_ + diCh.物_wu_wù_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "xīyān",
    //traduccion
    traduccion: "fumar",
    //caracter
    caracter: diCh.吸_xi_xī_ + diCh.烟_yan_yān_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "biăo",
    //traduccion
    traduccion: "reloj (de pulsera)",
    //caracter
    caracter: diCh.表_biao_biăo_
    },
    {categoria: "adjetivos",
    //pinyin
    pinyin: "nán",
    //traduccion
    traduccion: "difícil",
    //caracter
    caracter: diCh.难_nan_nán_
    },
    {categoria: "verbos",
    //pinyin
    pinyin: "dǎdī",
    //traduccion
    traduccion: "tomar un taxi",
    //caracter
    caracter: diCh.打_da_dă_ + diCh.的_de_
    },
    {categoria: "etiqueta",
    //pinyin
    pinyin: "báibai",
    //traduccion
    traduccion: "adiós (transliteración)",
    //caracter
    caracter: diCh.拜_bai_bài_ + diCh.拜_bai_bài_
    },
    {categoria: "familia",
    //pinyin
    pinyin: "sūnnür",
    //traduccion
    traduccion: "nieta por parte hijo",
    //caracter
    caracter: diCh.孙_sun_sūn_ + diCh.女_nü_nǚ_ + diCh.儿_er_ér_
    },
    {categoria: "comida",
    //pinyin
    pinyin: "xiāngjiāopíngguǒ",
    //traduccion
    traduccion: "manzana sabor a platano",
    //caracter
    caracter: diCh.香_xiang_xiāng_ + diCh.蕉_jiao_jiāo_ + diCh.苹_ping_píng_ + diCh.果_guo_guŏ_
    },
    {categoria: "sustantivos",
    //pinyin
    pinyin: "Liáng Zhù",
    //traduccion
    traduccion: "nombre de un concierto para violín chino",
    //caracter
    caracter: diCh.梁_liang_liáng_ + diCh.祝_zhu_zhù_
    },
    {categoria: "lugares",
    //pinyin
    pinyin: "shāngchǎng",
    //traduccion
    traduccion: "centro comercial",
    //caracter
    caracter: diCh.商_shang_shāng_ + diCh.场_chang_chăng_
    },
    {categoria: "comida",
    //pinyin
    pinyin: "règǒu",
    //traduccion
    traduccion: "bocadillo",
    //caracter
    caracter: diCh.热_re_rè_ + diCh.狗_gou_gŏu_
    },
    {categoria: "comida",
    //pinyin
    pinyin: "xīcān",
    //traduccion
    traduccion: "comida occidental",
    //caracter
    caracter: diCh.西_xi_xī_ + diCh.餐_can_cān_
    },
    {categoria: "comida",
    //pinyin
    pinyin: "zhōngcān",
    //traduccion
    traduccion: "comida china",
    //caracter
    caracter: diCh.中_zhong_zhōng_ + diCh.餐_can_cān_
    },
    {categoria: "comida",
    //pinyin
    pinyin: "shòumiàn",
    //traduccion
    traduccion: "(cumpleaños) tallarines de la longevidad",
    //caracter
    caracter: diCh.寿_shou_shòu_ + diCh.面_mian_miàn_
    },
    {categoria: "comida",
    //pinyin
    pinyin: "kǎoyā",
    //traduccion
    traduccion: "pato laqueado",
    //caracter
    caracter: diCh.烤_kao_kăo_ + diCh.鸭_ya_yā_
    }


];

let bufferCaracteres = [];
let bufferPinyin = [];
let bufferTraduccion = [];
for (const e of caracteresPinyinTraduccion) {
    caracter = e.caracter
    pinyin = e.pinyin;
    traduccion = e.traduccion;
    
    bufferCaracteres.push(caracter);
    bufferPinyin.push(pinyin);
    bufferTraduccion.push(traduccion);
}

function generarEnteroAleatorio(cantidadImagenes) {
    return Math.floor(Math.random() * cantidadImagenes);
}  


let buton1 = '<button id="boton" onclick="cargarImagenAleatoria(contador);" >caracter aleatorio</button>';
let buton2 = '<button id="boton" onclick="mostrarRespuesta();" >respuesta</button>';

const chHanzi = document.getElementById("chHanzi");
const chPinyin = document.getElementById("chPinyin");
const chEspanol = document.getElementById("chEspanol");

let estadoChHanzi;
let estadoChPinyin;
let estadoChTraduccion;

function setCheckpoints(){
    if(chHanzi.checked){
        estadoChHanzi = true;
    }else if(chHanzi.checked=false){
        estadoChHanzi = true;
    }if(chPinyin.checked){
        estadoChPinyin = true;
    }else if(chPinyin.checked=false){
        estadoChPinyin = true;
    }if(chEspanol.checked){
        estadoChTraduccion = true;
    }else if(chEspanol.checked=false){
        estadoChTraduccion = true;
    }
    document.getElementById("checkboxes").style.display = "none";
    document.getElementById("botondiv").innerHTML=buton1;

}

function listaAleatoriaUnica(n, max) {
  const numeros = new Set();
  while (numeros.size < n) {
    numeros.add(Math.floor(Math.random() * (max + 1)));
  }
  return Array.from(numeros);
}

let listaDeNumerosAleatorios = listaAleatoriaUnica(
  caracteresPinyinTraduccion.length,
  caracteresPinyinTraduccion.length - 1
);

let contador = 0;

function cargarImagenAleatoria(c){
    contador++;
    ocultarRespuesta();
    let indiceAleatorio = listaDeNumerosAleatorios[c];
    let caracterAleatorio = bufferCaracteres[indiceAleatorio];
    let pinyinAleatorio = bufferPinyin[indiceAleatorio];
    let traduccionAleatoria = bufferTraduccion[indiceAleatorio];
    
    document.getElementById("hanzi").innerHTML=caracterAleatorio;
    document.getElementById("PinYin").innerHTML=pinyinAleatorio;
    document.getElementById("traduccion").innerHTML=traduccionAleatoria;
    document.getElementById("botondiv").innerHTML=buton2;
}

// funcion para mostrar respuesta la segunda vez que se clickea el boton

function mostrarRespuesta(){
    
    if (chHanzi.checked == false){
        chHanzi.checked = true;
    }
    if (chPinyin.checked == false){
        chPinyin.checked = true

    }
    if (chEspanol.checked == false){
        chEspanol.checked = true

    }
    mostrar('hanzi','chHanzi');
    mostrar('pinyin','chPinyin');
    mostrar('espanol','chEspanol');
    document.getElementById("botondiv").innerHTML=buton1;
}
function ocultarRespuesta(){
    chHanzi.checked = estadoChHanzi;
    chPinyin.checked = estadoChPinyin;
    chEspanol.checked = estadoChTraduccion;
    mostrar('hanzi','chHanzi');
    mostrar('pinyin','chPinyin');
    mostrar('espanol','chEspanol');
}

let listas = document.getElementById("listas");
let categorias = ["pron dem", "estudio", "profesiones", "paises", "lugares", "adjetivos", "adverbio", "preguntas", "idiomas", "verbos", "etiqueta" ,"personas"];
var numCaracter = 0; 
for (const a of categorias) {
    let bufferListas = []; 
    listas.innerHTML=listas.innerHTML + "<h2>"+ a + "</h2>" + "<br>";
    for(const b of caracteresPinyinTraduccion){
        if (b.categoria==a){
            listas.innerHTML=listas.innerHTML + "<h2>"+ '<div id="' + numCaracter + '">' + b.caracter + '</div>'  + "___________"+ b.pinyin + "___________" + b.traduccion + "</h2>" + "<br>";
            numCaracter++;
        }
    }
}

function redibujarCaracter(string,id){
    document.getElementById(id).innerHTML=string;
}

