import bc from 'bcryptjs'

export const passwordHash = async(passwaord) =>{
    bc.hash(passwaord, 8);
    return passwordHash;
}