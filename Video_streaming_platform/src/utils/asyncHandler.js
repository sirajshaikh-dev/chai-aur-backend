const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}

// Method2: Using try catch
//asyncHandler is higher order func: accept func as parameter and return
// const asyncHandler= (fn)=>{()=>{}}
// const asyncHandler= (fn)=>{async()=>{}}
/*
const asyncHandler= (fn)=>async(err,req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
}
*/
