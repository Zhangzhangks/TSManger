export interface Iuser {
    id: number,
    name: string,
    role: RoleInt[]
    age: string
}
interface RoleInt {
    roleid: number
    rolename: string
}

interface roleListInt {
    authority: number[]
    roleId: number
    roleName: string
}
interface selectData {
    role: number
    name: string

}
export class InitData {
    select: selectData = {
        role: 0,
        name: ''
    };
    list: Iuser[] = []
    roleList: roleListInt[] = []
}