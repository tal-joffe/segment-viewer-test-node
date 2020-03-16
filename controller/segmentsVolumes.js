const { getSegmentsVolumes } = require('../repository/segmentsVolumes')

const segmentsVolumes = async (req, res, next) => {
  try {
    const segmentVolumes = await getSegmentsVolumes([1, 2, 3, 4, 5, 6, 7])
    res.json(segmentVolumes)
  } catch (err) {
    next(err)
  }
}

module.exports = segmentsVolumes
