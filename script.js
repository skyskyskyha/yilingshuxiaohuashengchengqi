class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomindex: 0
        };
        this.newquote = this.newquote.bind(this);
    }

    newquote() {
        this.setState(state => ({
            randomindex: Math.floor(Math.random() * 20)
        }));
    }

    render() {
        const possiblequotes = ['老师去学Python，但是只学会了一半，于是只会py', '老师退出直播圈时，整个炉石界都沸腾了，人们纷纷在问：“谁是戴佳伟？”', '有人说戴佳伟是世界第一术士， 我查了一下，是老师自己说的。', '开局豪言壮语，中期胡言乱语，后期沉默不语，直播间欢声笑语 ', '戴佳伟和爷爷上山砍柴，戴佳伟一斧子砍在爷爷腿上，爷爷大怒道：孙子别劈歪了 .', '大学时期戴佳伟和三个室友并称为三叉戟，三个室友是三根矛，戴佳伟是戟把 ', '夷陵鼠患刚绝，土人恶之，欲剥其皮为衣，然智者曰：夷陵鼠才毙，不可披外 ', '上古灵树一万年结果 后受魔气腐蚀 只有一颗只能结出菜来。世人惊叹：一灵树只有菜了 ', '那女孩对我说，代价为十个大铲车 ', '平湖戴氏，日如厕七次，众人皆疑，唯弹幕知厕中有汤供其饮之 ', '夷陵有鼠，喜憩于黄沙之壁，学者志之，曰：夷陵鼠适沙壁。', '刘备出师东吴，路夷陵，时饥荒，粮草尽为夷陵鼠食，刘备大骂“夷陵鼠真恶心。”', '时夷陵鼠灾，时人多捉夷陵鼠烹而食之。刘备食之，大喜，曰：夷陵鼠好菜。', '时人杀鼠以为内衣，体皆痒不可耐。若披外则无碍。孔明叹曰：“现方知夷陵鼠需披外也。”', '夷陵有鼠其大如斗，喜附于棍上，常有外人见鼠附棍惊曰:夷陵鼠执杖？', '有人说老师越来越菜了，在这里我澄清一下，老师一直都那么菜。', '人都有善心和恶心，但自从看了老师的写真后就只有善心了，因为恶心死了。', '戴佳伟问大师自己术士玩的怎么样，大师指着旁边烧开的水壶低头不语，戴佳伟问大师：“大师是说我术士的造诣已经炉火纯情？”大师说：“铁沸物。”', '戴佳伟问导演自己演什么，导演指着方天画戟，戴佳伟欣喜若狂问，“我演吕布？”，导演说，“你演戟把”。', '我在直播间看到你们编段子对老师大放厥词我都要急哭了，我怎么就想不出来这些段子呢。'];
        const quote = possiblequotes[this.state.randomindex];
        return /*#__PURE__*/React.createElement("div", {
            id: "quote-box"
        }, /*#__PURE__*/React.createElement("p", {
            id: "text"
        }, quote), /*#__PURE__*/React.createElement("button", {
            id: "new-quote",
            onClick: this.newquote
        }, "新笑话"));
    }

}

;
ReactDOM.render( /*#__PURE__*/React.createElement(QuoteBox, null), document.getElementById('start'));