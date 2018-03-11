import yargs from 'yargs';

const args = yargs
.option('',{
    boolean:true,
    default:false,
    describe:" 压缩所有的script "
})
.option('watch',{
    boolean:true,
    default:false,
    describe: " 监控所有的文件 "
})
.option('verbose',{
    boolean:true,
    default:false,
    describe: " log "
})
.option('sourcemaps',{
    describe:"soucemaps"
})
.option('',{
    string:true,
    default:8080,
    describe:" server port "
})

.argv

export default args;