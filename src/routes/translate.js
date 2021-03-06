const {translate: Translate} = require('../services/translation')

const translate = app => {
  app.get('/api/translate/:text', (req, res) => {
    Translate(req.params.text, req.query.source || 'en', req.query.language, (translationResult) =>
      res.send(translationResult ? translationResult.translatedText : req.params.text)
    )
  })
}

module.exports = app => {
  translate(app)
}
