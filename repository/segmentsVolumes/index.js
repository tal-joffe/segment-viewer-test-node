const segmentsVolumesResource = {}

const formatSegmentVolume = (segmentCode, volume) => {
  return {
    'segmentCode': segmentCode,
    'volume': volume
  }
}

segmentsVolumesResource.getSegmentsVolumes = async (arrVolumes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = arrVolumes.map(segmentCode => formatSegmentVolume(segmentCode, 123))
        resolve(result)
      } catch (err) {
        reject(err)
      }
    }, 2000)
  })
}

module.exports = segmentsVolumesResource
