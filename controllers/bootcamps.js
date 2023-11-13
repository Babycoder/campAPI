// @desc    Get all Bootcamps
// @route   Get /api/v1/bootcamps
// @access  Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc    Get one Bootcamp
// @route   Get /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @desc    Create new Bootcamp
// @route   Post /api/v1/bootcamps/
// @access  Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Creat new bootcamp' });
};

// @desc    Update Bootcamp
// @route   Put /api/v1/bootcamps/:id
// @access  Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc    Delete Bootcamp
// @route   Get /api/v1/bootcamps/:id
// @access  Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
