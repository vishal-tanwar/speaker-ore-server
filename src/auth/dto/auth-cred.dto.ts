import {
    IsString,
    IsEmail,
    IsOptional,
    IsEnum,
    IsPhoneNumber,
    IsNumber,
    IsBoolean,
} from 'class-validator'
import { AuthProvider } from '../enums/auth-provider.enum'
import {Role} from "../enums/roles.enums"
export class AuthCredentialsDTO {
    @IsString()
    @IsEnum(AuthProvider)
    provider: AuthProvider

    id: number
    
    @IsEmail()
    email: string

    @IsString()
    name: string

    idToken: string

    phone: string

    role:Role

    @IsBoolean()
    isSubscribed: boolean

}
export class AuthCredentialsDTOByEmail {

    @IsEmail()
    email: string

    @IsString()
    name: string
    
    phone: string
}
export class updatedAuth {

    @IsEmail()
    email: string

    @IsString()
    name: string
    
    phone: string
}