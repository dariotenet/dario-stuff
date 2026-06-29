import { Component } from '@angular/core';

@Component({
  selector: 'app-certificados',
  imports: [],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {
  certificados = [
    {
      titulo: 'AWS Academy Graduate - Cloud Foundations',
      emisor: 'AWS Academy',
      fecha: '2026',
      archivo: 'assets/certificados/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260427-32-lfz28n.pdf'
    },
    {
      titulo: 'Mendix Rapid Developer Certification',
      emisor: 'Mendix',
      fecha: '2026',
      archivo: 'assets/certificados/MendixRapidDeveloperCertification-109974.pdf_FirstPage.pdf'
    },
    {
      titulo: 'Entornos Personales de Aprendizaje (EPA!)',
      emisor: 'Universidad Autónoma de Aguascalientes',
      fecha: '2025',
      archivo: 'assets/certificados/Certificado_MorenoGonzález.pdf'
    },
    {
      titulo: 'Concurso de Programación (Ciencias Exactas)',
      emisor: 'Universidad Autónoma de Aguascalientes',
      fecha: '2025',
      archivo: 'assets/certificados/Constancia.pdf'
    },
    {
      titulo: 'Introducción a Cisco Packet Tracer',
      emisor: 'Cisco Networking Academy',
      fecha: '2025',
      archivo: 'assets/certificados/Getting_Started_with_Cisco_Packet_Tracer_certificate_al351261-edu-uaa-mx_ba229475-ea85-4ac0-bf1f-42e4ed048396.pdf'
    }
  ];
}